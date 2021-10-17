const express = require("express");
const router = express.Router();

router.post("/add", (req, res) => {
  return res.send("ADD....");
});

router.delete("/delete/:id", (req, res) => {
  return res.send("DELETE...");
});

router.get("/user/:user_id", (req, res) => {
  return res.send("BY USER....");
});

module.exports = router;
