const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url == '/friends' && req.method == "POST"){
        req.on("data", (chunk) => {
            console.log(chunk.toString())
            console.log(JSON.parse(chunk.toString()).name)
            res.write("Data Coming\n")
        })

        req.on("end", () => {
            res.end("Finished")
        })
    }
})

server.listen(8080, () => {
    console.log("Server running on 8080")
})