const fs = require("fs");

const contributors = fs.readFileSync("contributors.md", "utf8");

console.log(contributors);
