const express = require('express');
const app = express();

const movies = require("./movies")
const users = require("./users")
const reviews = require("./reviews")
const birds = require('./birds');

app.use('/movies', movies)

app.use('/users', users)

app.use('/reviews', reviews)

app.use('/birds', birds);

app.listen(8080);


