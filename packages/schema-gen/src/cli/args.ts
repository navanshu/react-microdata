import { ArgumentParser } from "argparse";

function parseArgs(args?: string[]) {
  const parser = new ArgumentParser({
    description: "schema generator",
  });

  parser.add_argument("--file", {
    default: undefined,
    help: "path to a .jsonld file",
    dest: "file",
  });

  parser.add_argument("--dest", {
    default: undefined,
    help: "path to destination folder",
    dest: "dest",
  });

  return parser.parse_args(args);
}

export default parseArgs;
