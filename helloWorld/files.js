const fs = require('fs');

// fs.writeFile("test.txt", "ok bro", (error) => {});

// const data = fs.readFileSync("test.txt", "utf-8")
// console.log(data);

// fs.readFile("test.txt", "utf-8", (err, result) => {
//     if (result) {
//         console.log(result)
//     }
// })

// fs.cpSync("test.txt", "copy.txt")

// fs.unlinkSync("test.txt")

console.log(fs.statSync("test.txt"))