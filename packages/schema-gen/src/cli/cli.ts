import main from '../main.js';
import parseArgs from './args.js';

const [, , ...args] = process.argv;

main(parseArgs(args))
 .then(() => {
  process.exit();
 })
 .catch((e) => {
  console.error(e);
  process.abort();
 });
