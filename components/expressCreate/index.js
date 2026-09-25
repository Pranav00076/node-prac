const http = require('http');

function express(){
    let routes = {};

    return {
        get : (url, cb) => {
            routes[url] = cb
        },
        listen: (port) => {
            let server = http.createServer((req,res) => {
                if (req.url in routes){
                    routes[req.url](req,res)
                }
            })
            server.listen(port)
        }
    }
}

module.exports = express;


/* ____ USER ____*/

// const app = express();

// app.get('/', (req,res) => {
//     res.end("Home Page")
// })

// app.get('/about', (req,res) => {
//     res.end("About Page")
// })

// app.listen(8080)