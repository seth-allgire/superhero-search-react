const express = require("express");
const auth = require("../middleware/auth.middleware");
const router = express.Router();
const {
  addMyHero,
  deleteMyHero,
  byUserID,
} = require("../models/myHeroes.models");

router.post("/add", (req, res) => {
  const hero = req.body;
  if (
    !hero.name ||
    !hero.url ||
    !hero.hero_id ||
    !hero.user_id ||
    !hero.alignment
  ) {
    return res.send({
      success: false,
      error: "Invalid data provided",
      data: null,
    });
  }
  addMyHero(res, hero);
});

router.delete("/delete/:id", (req, res) => {
  deleteMyHero(res, req.params.id);
});

router.get("/user", auth, (req, res) => {
  byUserID(res, req.user.uuid);
});

module.exports = router;
