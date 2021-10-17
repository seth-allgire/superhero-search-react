const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
  return res.send("SIGNUP....");
});

router.post("/login", (req, res) => {
  return res.send("LOGIN....");
});

module.exports = router;
