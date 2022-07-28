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
const generateImports = (imports) => {
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
const generateProps = (props) => {
    return props
        .map((name) => {
        return `${name}(){
        return this.makeItemPropComponent({ itemProp: "${name}" })
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
        ? [...extend, { name: "ItemFactory" }]
            .map((n) => n.name)
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
    return `export { default as ${name} } from './${name}'`;
};
const itemPropTemplate = (property, node) => {
    const { name } = node;
    const { name: propName } = property;
    return `
    import { ${name}Factory } from "../${name}";
    
    const ${capitalizeFirstLetter(propName)} = ${name}Factory.${propName}();
    
    export { ${capitalizeFirstLetter(propName)} };
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
        const fileName = `${name}.ts`;
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
        return Promise.all(node.properties.map((propName) => {
            return createItemPropFile(path, propName, node);
        }));
    });
    yield createFolder(path, node);
    yield createClassFile(path, node);
    yield createItemPropsFolder(path, node);
    yield createItemPropsFiles(path, node);
    yield createIndexFile(path, node);
    return;
});
const generateFiles = (rootPath, map) => __awaiter(void 0, void 0, void 0, function* () {
    return Promise.all(Object.values(map).map((node) => {
        return generateFile(rootPath, node);
    }));
});
const sanitizeName = (name) => {
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
    graph.forEach((node) => {
        if (node["@type"] === "rdf:Property") {
            let domainIncludes = [];
            if (node["schema:domainIncludes"]) {
                if (Array.isArray(node["schema:domainIncludes"])) {
                    domainIncludes = node["schema:domainIncludes"].map((c) => {
                        return sanitizeName(removeSchemaPrefix(c["@id"]));
                    });
                }
                else {
                    domainIncludes = [
                        sanitizeName(removeSchemaPrefix(node["schema:domainIncludes"]["@id"])),
                    ];
                }
            }
            domainIncludes.forEach((domain) => {
                classes[domain] = Object.assign(Object.assign({}, classes[domain]), { properties: [
                        ...classes[domain].properties,
                        { name: sanitizeName(removeSchemaPrefix(node["@id"])) },
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