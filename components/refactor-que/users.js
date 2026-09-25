const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.send("List of users");
});

router.get("/:userId", (req, res) => {
  res.send(`User with id ${req.params.userId}`);
});

router.post("/", (req, res) => {
  res.send("Creating users");
});

router.delete("/:userId", (req, res) => {
  res.send(`Deleting users with id ${userId}`);
});

module.exports = router;