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

const generateImports = (imports: string | string[] | undefined) => {
  if (!imports) {
    return "";
  }

  if (Array.isArray(imports)) {
    return [
      ...imports.map((name) => `import ${name} from '../${name}/${name}';`),
    ].join("\n");
  }

  return `import ${imports} from './${imports}';\n`;
};

const generateProps = (props: string[]) => {
  return props
    .map((name) => {
      return `${name}(){
        return this.makeItemPropComponent({ itemProp: "${name}" })
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
      ? [...extend, { name: "ItemFactory" }]
          .map((n: any) => n.name)
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
  return `export { default as ${name} } from './${name}'`;
};

type Property = {
  name: string;
};

type Node = {
  name: string;
  extend: { name: string }[];
  properties: Property[];
};

const itemPropTemplate = (property: Property, node: Node) => {
  const { name } = node;
  const { name: propName } = property;

  return `
    import { ${name}Factory } from "../${name}";
    
    const ${capitalizeFirstLetter(propName)} = ${name}Factory.${propName}();
    
    export { ${capitalizeFirstLetter(propName)} };
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
    const fileName = `${name}.ts`;

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
      node.properties.map((propName) => {
        return createItemPropFile(path, propName, node);
      })
    );
  };

  await createFolder(path, node);
  await createClassFile(path, node);

  await createItemPropsFolder(path, node);

  await createItemPropsFiles(path, node);

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
  return name === "3DModel" ? "ThreeModel" : name;
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

  graph.forEach((node: any) => {
    if (node["@type"] === "rdf:Property") {
      let domainIncludes: any = [];

      if (node["schema:domainIncludes"]) {
        if (Array.isArray(node["schema:domainIncludes"])) {
          domainIncludes = node["schema:domainIncludes"].map((c) => {
            return sanitizeName(removeSchemaPrefix(c["@id"]));
          });
        } else {
          domainIncludes = [
            sanitizeName(
              removeSchemaPrefix(node["schema:domainIncludes"]["@id"])
            ),
          ];
        }
      }

      domainIncludes.forEach((domain: string) => {
        classes[domain] = {
          ...classes[domain],
          properties: [
            ...classes[domain].properties,
            { name: sanitizeName(removeSchemaPrefix(node["@id"])) },
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
