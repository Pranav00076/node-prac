const express = require("express");
const path = require("node:path")

const app = express();
const folderPath = path.join(__dirname,'public')

app.use(express.static(folderPath))

const serverStartTime = Date.now()

app.get('/active', (req,res) => {
    const urlTime = Date.now()
    if (urlTime - serverStartTime <= 5000){
        res.status(200).send("User Active")
        return
    }
    res.status(408).send("Request Timed Out")
})

// Start the server on port 3000
app.listen(8080)

// Export the Express app
module.exports = app;

