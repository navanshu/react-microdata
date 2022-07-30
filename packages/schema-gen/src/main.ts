import fs from "fs/promises";
//@ts-ignore
import getPath from "node_modules-path";

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

const generateImports = (imports: string | string[] | undefined) => {
  if (!imports) {
    return "";
  }

  if (Array.isArray(imports)) {
    return [
      ...imports.map(
        (name) => `import ${name}Factory from '../${name}/${name}Factory';`
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

const classTemplate = ({ name, extend, properties }: any) => {
  let exportStr = `export default ${name};\n`;

  const imports: any = generateImports(extend.map((n: any) => n.name));

  const props = generateProps(properties.map((n: any) => n.name));

  return `
  import { Mixin } from 'ts-mixer';
  import ItemFactory from '../ItemFactory/ItemFactory';
  ${imports ? imports : ""}
   
  class ${name} extends Mixin(${
    Array.isArray(extend)
      ? [...extend, { name: "Item" }]
          .map((n: any) => `${n.name}Factory`)
          .filter(Boolean)
          .join(", ")
      : ""
  }){
  ${props}
  }
  
  const ${name}Factory = new ${name}();
  
  export { ${name}Factory };
  ${exportStr}
  `;
};

const indexTemplate = ({ name }: { name: string }) => {
  return `
    export * from './itemProps';
    export * from './${name}';
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
};

const itemPropTemplate = (property: Property, node: Node) => {
  const { name } = node;
  const { name: propName, scopes } = property;

  const imports = `import { ${name}Factory } from "../${name}Factory";`;
  const exports = `export { ${capitalizeFirstLetter(propName)} };`;

  const capName = capitalizeFirstLetter(propName);

  if (scopes.length === 1) {
    return `
      ${imports}

      const ${capName} = ${name}Factory.${propName}({ itemScope: "${scopes[0]}" });

      ${exports}
    `;
  } else if (scopes.length > 1) {
    return `
    ${imports}
    
    const ${capName} = {
      ${scopes
        .map((scopeName) => {
          return `${scopeName}: ${name}Factory.${propName}({ itemScope: "${scopeName}" })`;
        })
        .join(",\n")}
    };
    
    ${exports}
   `;
  }
  return `
      ${imports}
      
      const ${capName} = ${name}Factory.${propName}();
      
      ${exports}
    `;
};

const generateFile = async (path: string, node: Node) => {
  const createIndexFile = async (path: string, node: Node) => {
    const { name: folderName } = node;

    const indexPath = `${path}/${folderName}/index.ts`;
    await fs.writeFile(indexPath, indexTemplate(node));
  };

  const createFolder = async (path: string, node: Node) => {
    const { name: folderName } = node;
    await fs.mkdir(`${path}/${folderName}`);
  };

  const createClassFile = async (path: string, node: Node) => {
    const { name } = node;
    const fileName = `${name}Factory.ts`;

    const filePath = `${path}/${name}/${fileName}`;

    await fs.writeFile(filePath, classTemplate(node));
  };

  const createItemPropsFolder = async (path: string, node: Node) => {
    const { name: folderName } = node;
    await fs.mkdir(`${path}/${folderName}/itemProps`);
  };

  const createItemPropFile = async (
    path: string,
    property: Property,
    node: Node
  ) => {
    return fs.writeFile(
      `${path}/${node.name}/itemProps/${capitalizeFirstLetter(
        property.name
      )}.ts`,
      itemPropTemplate(property, node)
    );
  };

  const createItemPropsFiles = async (path: string, node: Node) => {
    return Promise.all(
      node.properties.map((property: Property) => {
        return createItemPropFile(path, property, node);
      })
    );
  };

  const createPropsIndexFile = async (path: string, node: Node) => {
    const filePath = `${path}/${node.name}/itemProps/index.ts`;
    const writeFiles = async (data: string) => fs.writeFile(filePath, data);

    if (node.properties.length === 0) {
      return writeFiles(`export {}`);
    }
    return writeFiles(
      `${node.properties
        .map((prop: Property) => {
          return `export * from "./${capitalizeFirstLetter(prop.name)}";`;
        })
        .join("\n")}`
    );
  };

  const createItemTypeFile = async (path: string, node: Node) => {
    const { name } = node;

    return fs.writeFile(
      `${path}/${name}/${name}.ts`,
      `
      import { ${name}Factory } from './${name}Factory';
      const ${name} = ${name}Factory.makeItemTypeComponent({ itemType: "${name}" });
      export { ${name} };
    `
    );
  };

  await createFolder(path, node);
  await createClassFile(path, node);

  await createItemPropsFolder(path, node);

  await createItemPropsFiles(path, node);

  await createPropsIndexFile(path, node);

  await createItemTypeFile(path, node);

  await createIndexFile(path, node);

  return;
};

const generateFiles = async (rootPath: string, map: any) => {
  return Promise.all(
    Object.values(map).map((node: any) => {
      return generateFile(rootPath, node);
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
  const classes = graph.reduce((acc: any, node: any) => {
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

  graph.forEach((node: any) => {
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

  return classes;
};

const copyItemFactory = async (dest: string) => {
  await fs.mkdir(`${dest}/ItemFactory`);
  return fs.copyFile(
    `${getPath()}/schema-gen/src/ItemFactory.ts`,
    `${dest}/ItemFactory/ItemFactory.ts`
  );
};

const main = async (args?: any) => {
  const file = args.file;
  const dest = args.dest;
  const schema = await fs.readFile(file, "utf-8");

  const schemaJson = JSON.parse(schema);

  const graphArray = schemaJson["@graph"];

  const map = transformGraph(graphArray);

  await generateFiles(dest, map);

  await copyItemFactory(dest);
};

export default main;
