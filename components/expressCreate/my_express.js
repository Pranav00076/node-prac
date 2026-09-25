const express = require('./index.js')

const app = express();

app.get('/', (req,res) => {
    res.end("Home Page")
})

app.get('/about', (req,res) => {
    res.end("About Page")
})

app.listen(8080)