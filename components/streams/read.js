const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join(__dirname, "customers.csv");
console.log(filePath)

const stream = fs.createReadStream(filePath, {encoding: "utf-8" , highWaterMark: 1024*1024});

let rows = 0
let size = 0

stream.on("data", (chunk) => {
    console.log(chunk)
    size += 1
    console.log(`${size} mb..`)
    let curr = (chunk.split("\n")).length
    rows += curr
    console.log(rows)
});

stream.on("end" , () => {
    console.log("Read Everything")
})



