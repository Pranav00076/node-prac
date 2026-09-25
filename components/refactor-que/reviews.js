const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.send("List of reviews");
});

router.get("/:reviewId", (req, res) => {
  res.send(`Review with id ${req.params.reviewId}`);
});

router.post("/", (req, res) => {
  res.send("Creating reviews");
});

router.delete("/:reviewId", (req, res) => {
  res.send(`Deleting reviews with id ${reviewId}`);
});

module.exports = router;