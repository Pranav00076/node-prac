const fs = require("node:fs");

const stream = fs.createWriteStream("customersTTT.csv");

for (let i = 0; i < 80000000; i++){
stream.write(`${i},name,age,city\n`);
}


stream.end();