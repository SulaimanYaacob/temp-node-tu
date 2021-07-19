const path = require("path");

console.log(path.sep); // some path seperator is \ instead of /

const filePath = path.join("./content", "subfolder", "text.txt");
console.log(filePath);

const base = path.basename(filePath); //getting the root (base of the path)
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt"); // getting absolute path
console.log(absolute);
