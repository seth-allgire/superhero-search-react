const express = require("express");
const router = express.Router();
const { createAccount, login } = require("../models/users.models");

router.post("/createAccount", (req, res) => {
  const { username, password } = req.body;
  if (validate(username, password)) {
    return res.send({
      success: false,
      error: "Invalid data provided",
      data: null,
    });
  }
  createAccount(res, username, password);
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (validate(username, password)) {
    return res.send({
      success: false,
      error: "Invalid data provided",
      data: null,
    });
  }
  login(res, username, password);
});

function validate(username, password) {
  return (
    !username ||
    !password ||
    username.length < 4 ||
    username.length > 20 ||
    password.length < 8 ||
    password.length > 20
  );
}

module.exports = router;
