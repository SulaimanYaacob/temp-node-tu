// CommonJS, every file is module (by default)
// Module - Encapsulated Code
const names = require("./3-name");
const { sayHi } = require("./4-utils"); // Destructuring
const data = require("./5-alternative-flavor");
require("./6-mind-grenade"); // same as constructor

console.log(data);
console.log(names.pete);
sayHi(names.john);

// sayHi("leman");
// sayHi(john);
// sayHi(pete);
