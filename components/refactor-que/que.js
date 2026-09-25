const express = require("express");

const app = express();

app.get("/movies", (req, res) => {
  res.send("List of movies");
});

app.get("/movies/:movieId", (req, res) => {
  res.send(`Movie with id ${req.params.movieId}`);
});

app.post("/movies", (req, res) => {
  res.send("Creating movies");
});

app.delete("/movies/:movieId", (req, res) => {
  res.send(`Deleting movies with id ${movieId}`);
});

app.get("/users", (req, res) => {
  res.send("List of users");
});

app.get("/users/:userId", (req, res) => {
  res.send(`User with id ${req.params.userId}`);
});

app.post("/users", (req, res) => {
  res.send("Creating users");
});

app.delete("/users/:userId", (req, res) => {
  res.send(`Deleting users with id ${userId}`);
});

app.get("/reviews", (req, res) => {
  res.send("List of reviews");
});

app.get("/reviews/:reviewId", (req, res) => {
  res.send(`Review with id ${req.params.reviewId}`);
});

app.post("/reviews", (req, res) => {
  res.send("Creating reviews");
});

app.delete("/reviews/:reviewId", (req, res) => {
  res.send(`Deleting reviews with id ${reviewId}`);
});

app.listen(3000);