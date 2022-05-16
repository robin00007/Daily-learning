const express = require("express");
const router = express.Router();

const User = require("../models/User");
// @ route          POST api/usersa
// @desc            Register a user
// @access          Public
router.post("/", (req, res) => {
  res.send("Regiser a user");
  res.send(req.body);
});

module.exports = router;
