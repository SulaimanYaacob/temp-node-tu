const fs = require("fs");
console.log("start");
const first = fs.readFileSync("./content/first.txt", "utf-8"); // utf-8 is universal language
const second = fs.readFileSync("./content/second.txt", "utf-8");

fs.writeFileSync(
  // writing the file (creating the new file)
  "./content/result-sync.txt",
  `Here is the result ${first},${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting anew");
