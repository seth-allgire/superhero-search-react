const express = require("express");
const router = express.Router();
const { signup } = require("../models/users.models");

router.post("/signup", (req, res) => {
  const { username, password } = req.body;
  if (
    !username ||
    !password ||
    username.length < 4 ||
    username.length > 20 ||
    password.length < 8 ||
    password.length > 20
  ) {
    return res.send({
      success: false,
      error: "Invalid data provided",
      data: null,
    });
  }
  signup(res, username, password);
});

router.post("/login", (req, res) => {
  return res.send("LOGIN....");
});

module.exports = router;
