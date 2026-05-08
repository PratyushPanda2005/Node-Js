// file system
const fs = require("fs") // This asks Nodejs to load its build in fs module

const content = fs.readFileSync("note.txt", "utf8") // utf8 means read it as a normal text

console.log(content);
