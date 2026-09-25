const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.send("List of movies");
});

router.get("/:movieId", (req, res) => {
  res.send(`Movie with id ${req.params.movieId}`);
});

router.post("/", (req, res) => {
  res.send("Creating movies");
});

router.delete("/:movieId", (req, res) => {
  res.send(`Deleting movies with id ${movieId}`);
});

module.exports = router;