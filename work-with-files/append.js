const fs = require("fs")

fs.appendFileSync("note.txt", "\nThis is Line 2")

if(fs.existsSync("note.txt")){
    console.log("File exists");
} else {
    console.log("File does not exist");
    
}

console.log("Text added");


