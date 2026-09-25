const http = require('http');
const fs = require('fs');
const path = require("node:path");

const filePath = path.join(__dirname, "customers.txt");

let create = fs.createWriteStream(filePath, "utf-8");

for (let i = 0; i < 100; i++){
    let str = "Faahhh";
    create.write(`${str}\n`)
}

let text = fs.readFileSync(filePath, "utf-8")

const server = http.createServer((req, res) => {
    // url, header, body, method
    // console.log("url :", req.url)
    // console.log("header :", req.headers)
    // console.log("body :", req.body)
    // console.log("method :", req.method)

    //status code,  res, text
    res.writeHead(200);
    res.write("Respone 1\n")
    res.end(text)

});
server.listen(8080, () => {
    console.log("Server Running")
})