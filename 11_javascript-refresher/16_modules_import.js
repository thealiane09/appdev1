import greeting, { info } from "./15_modules_export.js";

console.log(greeting());
console.log("Imported Info:", info.name, "-", info.age);
