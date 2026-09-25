const http = require("http");
const dotenv = require("dotenv");

dotenv.config();
console.log(process.env.PORT);

const app = http.createServer((req, res) => {
  // ans
  const url = req.url;
  const splitted = url.split("/");

  if (url.startsWith("/items")) {
    if (req.method == "GET") {
      const itemId = splitted[2];

      if (!itemId) {
        res.writeHead(404, {
          "Content-type": "text/plain",
        });
        res.end("Not Found");
        return;
      }
      res.writeHead(200, {
        "Content-type": "text/plain",
      });
      res.end(`Viewing details for item ${splitted[2]}`);
    }
  } else {
    res.writeHead(404, {
      "Content-type": "text/plain",
    });
    res.end("Not Found");
    return;
  }

  // Write your routing logic here
  // const url = req.url.split("/")

  // if (url[1] != "items" || url[2] == undefined || req.url == "/items/" ){
  // res.writeHead(404, {
  //     'Content-type' : 'text/plain'
  // })
  // res.end('Not Found')
  // return;
  // }

  // res.writeHead(200, {
  //     'Content-type' : 'text/plain'
  // })
  // res.end(`Viewing details for item ${url[2]}`)
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
