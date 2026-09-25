const express = require('express');
const app = express();

//app.use sare route handler se phle chalega jo uske baad likhe hain, next() call krna jaruri hai 'use->handler' ke liye 

app.use((req,res,next) => {
    console.log("Middleware")
    next()
})

app.get('/', (req,res) => {
    res.status(204).send("Hello")
})