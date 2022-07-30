var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from "fs/promises";
//@ts-ignore
import getPath from "node_modules-path";
const removeSchemaPrefix = (s) => {
    const [, res] = s.split(":");
    return res;
};
function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
function lowercaseFirstLetter(word) {
    return word.charAt(0).toLowerCase() + word.slice(1);
}
const generateImports = (imports) => {
    if (!imports) {
        return "";
    }
    if (Array.isArray(imports)) {
        return [
            ...imports.map((name) => `import ${name}Factory from '../${name}/${name}Factory';`),
        ].join("\n");
    }
    return `import ${imports}Factory from './${imports}';\n`;
};
const generateProps = (props) => {
    return props
        .map((name) => {
        return `${name}({ itemScope }: { itemScope?:string }){
        return this.makeItemPropComponent({ itemProp: "${name}", itemScope })
      };`;
    })
        .join("\n");
};
const classTemplate = ({ name, extend, properties }) => {
    let exportStr = `export default ${name};\n`;
    const imports = generateImports(extend.map((n) => n.name));
    const props = generateProps(properties.map((n) => n.name));
    return `
  import { Mixin } from 'ts-mixer';
  import ItemFactory from '../ItemFactory/ItemFactory';
  ${imports ? imports : ""}
   
  class ${name} extends Mixin(${Array.isArray(extend)
        ? [...extend, { name: "Item" }]
            .map((n) => `${n.name}Factory`)
            .filter(Boolean)
            .join(", ")
        : ""}){
  ${props}
  }
  
  const ${name}Factory = new ${name}();
  
  export { ${name}Factory };
  ${exportStr}
  `;
};
const indexTemplate = ({ name }) => {
    return `
    export * from './itemProps';
    export * from './${name}';
  `;
};
const itemPropTemplate = (property, node) => {
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
    }
    else if (scopes.length > 1) {
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
const generateFile = (path, node) => __awaiter(void 0, void 0, void 0, function* () {
    const createIndexFile = (path, node) => __awaiter(void 0, void 0, void 0, function* () {
        const { name: folderName } = node;
        const indexPath = `${path}/${folderName}/index.ts`;
        yield fs.writeFile(indexPath, indexTemplate(node));
    });
    const createFolder = (path, node) => __awaiter(void 0, void 0, void 0, function* () {
        const { name: folderName } = node;
        yield fs.mkdir(`${path}/${folderName}`);
    });
    const createClassFile = (path, node) => __awaiter(void 0, void 0, void 0, function* () {
        const { name } = node;
        const fileName = `${name}Factory.ts`;
        const filePath = `${path}/${name}/${fileName}`;
        yield fs.writeFile(filePath, classTemplate(node));
    });
    const createItemPropsFolder = (path, node) => __awaiter(void 0, void 0, void 0, function* () {
        const { name: folderName } = node;
        yield fs.mkdir(`${path}/${folderName}/itemProps`);
    });
    const createItemPropFile = (path, property, node) => __awaiter(void 0, void 0, void 0, function* () {
        return fs.writeFile(`${path}/${node.name}/itemProps/${capitalizeFirstLetter(property.name)}.ts`, itemPropTemplate(property, node));
    });
    const createItemPropsFiles = (path, node) => __awaiter(void 0, void 0, void 0, function* () {
        return Promise.all(node.properties.map((property) => {
            return createItemPropFile(path, property, node);
        }));
    });
    const createPropsIndexFile = (path, node) => __awaiter(void 0, void 0, void 0, function* () {
        const filePath = `${path}/${node.name}/itemProps/index.ts`;
        const writeFiles = (data) => __awaiter(void 0, void 0, void 0, function* () { return fs.writeFile(filePath, data); });
        if (node.properties.length === 0) {
            return writeFiles(`export {}`);
        }
        return writeFiles(`${node.properties
            .map((prop) => {
            return `export * from "./${capitalizeFirstLetter(prop.name)}";`;
        })
            .join("\n")}`);
    });
    const createItemTypeFile = (path, node) => __awaiter(void 0, void 0, void 0, function* () {
        const { name } = node;
        return fs.writeFile(`${path}/${name}/${name}.ts`, `
      import { ${name}Factory } from './${name}Factory';
      const ${name} = ${name}Factory.makeItemTypeComponent({ itemType: "${name}" });
      export { ${name} };
    `);
    });
    yield createFolder(path, node);
    yield createClassFile(path, node);
    yield createItemPropsFolder(path, node);
    yield createItemPropsFiles(path, node);
    yield createPropsIndexFile(path, node);
    yield createItemTypeFile(path, node);
    yield createIndexFile(path, node);
    return;
});
const generateFiles = (rootPath, map) => __awaiter(void 0, void 0, void 0, function* () {
    return Promise.all(Object.values(map).map((node) => {
        return generateFile(rootPath, node);
    }));
});
const sanitizeName = (name) => {
    if (name.startsWith("schema:"))
        return removeSchemaPrefix(name);
    return name === "3DModel" ? "ThreeModel" : name;
};
const transformGraph = (graph) => {
    const classes = graph.reduce((acc, node) => {
        const classKey = "rdfs:Class";
        const type = node["@type"];
        if (type === classKey || (Array.isArray(type) && type.includes(classKey))) {
            const name = sanitizeName(removeSchemaPrefix(node["@id"]));
            let subClassOf = [];
            if (node["rdfs:subClassOf"]) {
                if (Array.isArray(node["rdfs:subClassOf"])) {
                    subClassOf = node["rdfs:subClassOf"].map((n) => {
                        return { name: sanitizeName(removeSchemaPrefix(n["@id"])) };
                    });
                }
                else {
                    subClassOf = [
                        {
                            name: sanitizeName(removeSchemaPrefix(node["rdfs:subClassOf"]["@id"])),
                        },
                    ];
                }
            }
            return Object.assign(Object.assign({}, acc), { [name]: {
                    name: name,
                    extend: subClassOf,
                    properties: [],
                } });
        }
        return acc;
    }, {});
    const getRangeIncludes = (node) => {
        if (!node["schema:rangeIncludes"]) {
            return [];
        }
        if (Array.isArray(node["schema:rangeIncludes"])) {
            return node["schema:rangeIncludes"].map((n) => sanitizeName(n["@id"]));
        }
        return [sanitizeName(node["schema:rangeIncludes"]["@id"])];
    };
    graph.forEach((node) => {
        const getId = (node) => node["@id"];
        const isProperty = node["@type"] === "rdf:Property";
        if (isProperty) {
            const propertyNode = node;
            let domainIncludes = [];
            if (propertyNode["schema:domainIncludes"]) {
                if (Array.isArray(propertyNode["schema:domainIncludes"])) {
                    domainIncludes = propertyNode["schema:domainIncludes"].map((c) => {
                        const id = sanitizeName(removeSchemaPrefix(getId(c)));
                        return id;
                    });
                }
                else {
                    domainIncludes = [
                        sanitizeName(removeSchemaPrefix(getId(propertyNode["schema:domainIncludes"]))),
                    ];
                }
            }
            domainIncludes.forEach((domain) => {
                const propertyName = sanitizeName(removeSchemaPrefix(getId(propertyNode)));
                const scopes = getRangeIncludes(propertyNode);
                classes[domain] = Object.assign(Object.assign({}, classes[domain]), { properties: [
                        ...classes[domain].properties,
                        { name: propertyName, scopes },
                    ] });
            });
        }
    });
    return classes;
};
const copyItemFactory = (dest) => __awaiter(void 0, void 0, void 0, function* () {
    yield fs.mkdir(`${dest}/ItemFactory`);
    return fs.copyFile(`${getPath()}/schema-gen/src/ItemFactory.ts`, `${dest}/ItemFactory/ItemFactory.ts`);
});
const main = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const file = args.file;
    const dest = args.dest;
    const schema = yield fs.readFile(file, "utf-8");
    const schemaJson = JSON.parse(schema);
    const graphArray = schemaJson["@graph"];
    const map = transformGraph(graphArray);
    yield generateFiles(dest, map);
    yield copyItemFactory(dest);
});
export default main;
//# sourceMappingURL=main.js.map