import { writeFile, mkdir, copyFile, readFile } from "fs/promises";
import { existsSync } from "fs";
import { resolve } from "path";

const packageName = "@react-microdata";

//@ts-ignore
import getPath from "node_modules-path";

function upperCaseArray(input: string) {
  const result = input.replace(/([A-Z]+)/g, ",$1").replace(/^,/, "");
  return result.split(",");
}
const transformToKebabCase = (value: string) => {
  return upperCaseArray(value)
    .map((c) => c.toLowerCase())
    .join("-");
};
const removeSchemaPrefix = (s: string) => {
  const [, res] = s.split(":");
  return res;
};

function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function lowercaseFirstLetter(word: string) {
  return word.charAt(0).toLowerCase() + word.slice(1);
}

const copyPackageJSON = async (
  path: string,
  node: { name: string; extend: { name: string }[] }
) => {
  const packageJsonPath = `${resolve()}/package.template.json`;

  const packageJson: any = JSON.parse(await readFile(packageJsonPath, "utf-8"));
  packageJson.name = `${packageName}/${upperCaseArray(node.name)
    .map((n) => n.toLowerCase())
    .join("-")}`;

  packageJson.types = `./dist/index.d.ts`;

  return writeFile(
    `${path}/${node.name}/package.json`,
    JSON.stringify(packageJson)
  );
};

const copyTSConfig = async (path: string, node: { name: string }) => {
  const tsConfigPath = `${resolve()}/tsconfig.template.json`;

  const tsConfig: any = await readFile(tsConfigPath, "utf-8");
  //
  return writeFile(`${path}/${node.name}/tsconfig.json`, tsConfig);
};

const generateImports = (imports: string | string[] | undefined) => {
  if (!imports) {
    return "";
  }

  if (Array.isArray(imports)) {
    return [
      ...imports.map(
        (name) =>
          `import { ${name}Factory } from '${packageName}/${transformToKebabCase(
            name
          )}';`
      ),
    ].join("\n");
  }

  return `import ${imports}Factory from './${imports}';\n`;
};

const generateProps = (props: string[]) => {
  return props
    .map((name) => {
      return `${name}({ itemScope }: { itemScope?:string }){
        return this.makeItemPropComponent({ itemProp: "${name}", itemScope })
      };`;
    })
    .join("\n");
};

const indexTemplate = ({
  name,
  properties,
  extendedProperties,
}: {
  name: string;
  properties: { name: string }[];
  extendedProperties: { name: string }[];
}) => {
  const importProps = Object.keys({
    ...properties.reduce((acc, { name }) => {
      return {
        ...acc,
        [capitalizeFirstLetter(name)]: name,
      };
    }, {}),
    ...extendedProperties.reduce((acc, { name }) => {
      return {
        ...acc,
        [capitalizeFirstLetter(name)]: name,
      };
    }, {}),
  })
    .map((name) => {
      return `import { ${name} } from './src/itemProps/${name}'`;
    })
    .join(";\n");

  const propNames = Object.keys({
    ...properties.reduce((acc, { name }) => {
      return {
        ...acc,
        [capitalizeFirstLetter(name)]: name,
      };
    }, {}),
    ...extendedProperties.reduce((acc, { name }) => {
      return {
        ...acc,
        [capitalizeFirstLetter(name)]: name,
      };
    }, {}),
  }).join(",\n");

  if (name === "Review" || name === "Comment") {
    return `
      ${importProps}
      import { ${name}Type } from './src/${name}Type';
      
      export {
        ${name}Type,
        ${propNames}
      };
      export default {
        ${name}Type,
        ${propNames}  
      }
    `;
  }

  return `
    ${importProps}
    import { ${name} } from './src/${name}';
    
    export {
      ${name},
      ${propNames}
    };
    export default {
      ${name},
      ${propNames}  
    }
  `;
};

type Property = {
  name: string;
  scopes: string[];
};

type Node = {
  name: string;
  extend: { name: string }[];
  properties: Property[];
  extendedProperties: Property[];
};

const itemPropTemplate = (property: Property, node: Node, map: any) => {
  const { name: propName, scopes } = property;

  const capName = capitalizeFirstLetter(propName);

  const imports = `import { createElement, FC, HTMLAttributes, HTMLProps } from "react"`;
  const exports = `export { ${capName} }`;

  const typeTemplate = `type Type = FC<HTMLProps<HTMLAttributes<any>> & {as?: string;}>`;

  if (scopes.length === 1) {
    if (
      scopes[0] === "Text" ||
      // some props like the "url" on the "Person" type is of type "Url".
      // to be able to write <Url>https://...</Url>, return a function
      // otherwise the user would need to write <Url.Url>https://...</Url.Url>
      // and that sucks!
      scopes[0].toLowerCase() === propName.toLowerCase()
    ) {
      return `
      ${imports};
      
      ${typeTemplate};
      
      const ${capName}:Type = ({ as = 'div', children, ...props}) => {
        return createElement(
          as,
          {
            itemProp: '${propName}',
            ...props,
          },
          children
        )
      }

      ${exports};
    `;
    }

    return `
      ${imports};
       
       ${typeTemplate};
       
       const ${capName}: {
        ${scopes[0]}: Type
       } = {
        ${scopes[0]}: ({ as = 'div', children, ...props}) => {
        return createElement(
          as,
          {
            itemProp: "${propName}",
            itemScope: true,
            itemType: "https://schema.org/${scopes[0]}",
            ...props,
          },
          children
        )
      }
       };
      
      ${exports};
    `;
  }
  if (scopes.length > 1) {
    const s = scopes.filter((n) => n !== "Text");

    // remove Text scope

    // return a React component for the Text scope. Other scopes as compound components.
    // this allows Text type on a property to be a simple text.
    return `
        ${imports};
        
        ${typeTemplate};
       
        const ${capName}:Type & {
          ${s
            .map((n) => {
              return `${n}: Type`;
            })
            .join(",\n")}
        } = ({ as = 'div', children, ...props}) => {
          return createElement(
            as,
            {
              itemProp: '${propName}',
              ...props,
            },
            children
          )
        }
        
        ${s
          .map((n) => {
            return `
            ${capName}.${n} = ({ as = 'div', children, ...props }) => {
            return createElement(
              as,
              {
                itemProp: "${propName}",
                itemScope: true,
                itemType: "https://schema.org/${n}",
                ...props
              },
              children
            )
          }`;
          })
          .join(";\n")}
         
        ${exports};
      `;
  }
  return `
      ${imports};
      
      ${typeTemplate};
      
      const ${capName}:Type = ({ as = 'div', children, ...props}) => {
        return createElement(
            as,
            {
              itemProp: '${propName}',
              ...props,
            },
            children
        )
      };
      
      ${exports};
    `;
};

const generateFile = async (path: string, node: Node, map: any) => {
  const createIndexFile = async (path: string, node: Node) => {
    const { name: folderName } = node;

    const indexPath = `${path}/${folderName}/index.ts`;
    await writeFile(indexPath, indexTemplate(node));
  };

  const createFolder = async (path: string, node: Node) => {
    const { name: folderName } = node;
    await mkdir(`${path}/${folderName}`);
    await mkdir(`${path}/${folderName}/src`);
  };

  const createItemPropsFolder = async (path: string, node: Node) => {
    const { name: folderName } = node;
    await mkdir(`${path}/${folderName}/src/itemProps`);
  };

  const createItemPropFile = async (
    path: string,
    property: Property,
    node: Node
  ) => {
    const p = `${path}/${node.name}/src/itemProps/${capitalizeFirstLetter(
      property.name
    )}.ts`;

    if (existsSync(p)) {
      return;
    }

    return writeFile(p, itemPropTemplate(property, node, map));
  };

  const createItemPropsFiles = async (path: string, node: Node) => {
    return Promise.all([
      ...node.properties.map((property: Property) => {
        return createItemPropFile(path, property, node);
      }),
      ...node.extendedProperties.map((property) => {
        return createItemPropFile(path, property, node);
      }),
    ]);
  };

  const createPropsIndexFile = async (path: string, node: Node) => {
    const filePath = `${path}/${node.name}/src/itemProps/index.ts`;
    const write = async (data: string) => writeFile(filePath, data);

    const allProps = [...node.properties, ...node.extendedProperties];

    if (allProps.length === 0) {
      return write(`export {}`);
    }
    return write(
      `${allProps
        .map((prop: Property) => {
          return `export * from "./${capitalizeFirstLetter(prop.name)}";`;
        })
        .join("\n")}`
    );
  };

  const createItemTypeFile = async (path: string, node: Node) => {
    const { name } = node;
    const typeTemplate = `type Type = FC<HTMLProps<HTMLAttributes<any>> & {as?: string;}>`;
    const imports = `import { createElement, FC, HTMLAttributes, HTMLProps } from "react"`;

    if (name === "Review" || name === "Comment") {
      return writeFile(
        `${path}/${name}/src/${name}Type.ts`,
        `
          ${imports};
          ${typeTemplate};
          
          const ${name}Type:Type = ({ as = 'div', children, ...props }) => {
            return createElement(
              as,
              {
                itemScope: true,
                itemType: 'https://schema.org/${name}',
                ...props
              },
              children
            );
          };
          
          export { ${name}Type }; 
        `
      );
    }

    return writeFile(
      `${path}/${name}/src/${name}.ts`,
      `
      ${imports};
          ${typeTemplate};
      
      const ${name}:Type = ({ as = 'div', children, ...props }) => {
        return createElement(
          as,
          {
            itemScope: true,
            itemType: 'https://schema.org/${name}',
            ...props
          },
          children
        );
      };
      
      export { ${name} }; 
    `
    );
  };

  await createFolder(path, node);

  await createItemPropsFolder(path, node);

  await createItemPropsFiles(path, node);

  await createPropsIndexFile(path, node);

  await createItemTypeFile(path, node);

  await createIndexFile(path, node);

  await copyPackageJSON(path, node);

  await copyTSConfig(path, node);

  return;
};

const generateFiles = async (rootPath: string, map: any) => {
  return Promise.all(
    Object.values(map).map((node: any) => {
      return generateFile(rootPath, node, map);
    })
  );
};

const sanitizeName = (name: string) => {
  if (name.startsWith("schema:")) return removeSchemaPrefix(name);
  return name === "3DModel" ? "ThreeModel" : name;
};

type GraphNode = {
  "@id": string;
  "schema:rangeIncludes"?:
    | Array<{
        "@id": string;
      }>
    | {
        "@id": string;
      };
};

const transformGraph = (graph: any) => {
  let classes = graph.reduce((acc: any, node: any) => {
    const classKey = "rdfs:Class";
    const type = node["@type"];

    if (type === classKey || (Array.isArray(type) && type.includes(classKey))) {
      const name = sanitizeName(removeSchemaPrefix(node["@id"]));
      let subClassOf: any = [];

      if (node["rdfs:subClassOf"]) {
        if (Array.isArray(node["rdfs:subClassOf"])) {
          subClassOf = node["rdfs:subClassOf"].map((n) => {
            return { name: sanitizeName(removeSchemaPrefix(n["@id"])) };
          });
        } else {
          subClassOf = [
            {
              name: sanitizeName(
                removeSchemaPrefix(node["rdfs:subClassOf"]["@id"])
              ),
            },
          ];
        }
      }

      return {
        ...acc,
        [name]: {
          name: name,
          extend: subClassOf,
          properties: [],
        },
      };
    }
    return acc;
  }, {});

  const getRangeIncludes = (node: GraphNode) => {
    if (!node["schema:rangeIncludes"]) {
      return [];
    }
    if (Array.isArray(node["schema:rangeIncludes"])) {
      return node["schema:rangeIncludes"].map((n) => sanitizeName(n["@id"]));
    }
    return [sanitizeName(node["schema:rangeIncludes"]["@id"])];
  };

  graph.forEach((node: any, index: number, graph: any) => {
    const getId = (node: GraphNode) => node["@id"];

    const isProperty = node["@type"] === "rdf:Property";

    if (isProperty) {
      const propertyNode = node;
      let domainIncludes: any = [];

      if (propertyNode["schema:domainIncludes"]) {
        if (Array.isArray(propertyNode["schema:domainIncludes"])) {
          domainIncludes = propertyNode["schema:domainIncludes"].map((c) => {
            const id = sanitizeName(removeSchemaPrefix(getId(c)));
            return id;
          });
        } else {
          domainIncludes = [
            sanitizeName(
              removeSchemaPrefix(getId(propertyNode["schema:domainIncludes"]))
            ),
          ];
        }
      }

      domainIncludes.forEach((domain: string) => {
        const propertyName = sanitizeName(
          removeSchemaPrefix(getId(propertyNode))
        );
        const scopes = getRangeIncludes(propertyNode);

        classes[domain] = {
          ...classes[domain],
          properties: [
            ...classes[domain].properties,
            { name: propertyName, scopes },
          ],
        };
      });
    }
  });

  // collect properties from the extended nodes
  const accumulateExtendedProperties = (node: any) => {
    let res = node.properties.reduce((acc: any, prop: any) => {
      return {
        ...acc,
        [prop.name]: prop,
      };
    }, {});

    node.extend.forEach(({ name }: { name: string }) => {
      res = { ...res, ...accumulateExtendedProperties(classes[name]) };
    });

    return res;
  };

  classes = Object.values(classes).reduce((acc: any, node: any) => {
    return {
      ...acc,
      [node.name]: {
        ...node,
        extendedProperties: Object.values(accumulateExtendedProperties(node)),
      },
    };
  }, {});

  return classes;
};

const copyItemFactory = async (dest: string) => {
  await mkdir(`${dest}/ItemFactory`);
  await mkdir(`${dest}/ItemFactory/src`);

  await copyPackageJSON(dest, { name: "ItemFactory", extend: [] });
  await copyTSConfig(dest, { name: "ItemFactory" });

  await copyFile(
    `${getPath()}/${packageName}/gen/src/ItemFactory.ts`,
    `${dest}/ItemFactory/src/ItemFactory.ts`
  );

  return writeFile(
    `${dest}/ItemFactory/index.ts`,
    `import {default as ItemFactory} from './src/ItemFactory'; export default ItemFactory;`
  );
};

const main = async (args?: any) => {
  const file = args.file;
  const dest = args.dest;
  const schema = await readFile(file, "utf-8");

  const schemaJson = JSON.parse(schema);

  const graphArray = schemaJson["@graph"];

  const map = transformGraph(graphArray);

  await generateFiles(dest, map);

  await copyItemFactory(dest);
};

export default main;
