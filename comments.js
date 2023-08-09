// Create web server
// Get comments from database
// Send comments to client

// Import modules
const express = require("express");
const router = express.Router();
const Comment = require("../models/Comments");

// Create web server
router.get("/", (req, res) => {
  Comment.find()
    .then((comments) => res.json(comments))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Export router
module.exports = router;