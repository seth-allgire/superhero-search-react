const express = require("express");
const auth = require("../middleware/auth.middleware");
const router = express.Router();
const {
  addMyHero,
  deleteMyHero,
  byUserID,
} = require("../models/myHeroes.models");

router.post("/add", auth, (req, res) => {
  const hero = {
    name: req.body.name,
    hero_id: req.body.hero_id,
    url: req.body.url,
    alignment: req.body.alignment,
    user_id: req.user.id,
  };
  if (!hero.name || !hero.url || !hero.hero_id || !hero.alignment) {
    return res.send({
      success: false,
      error: "Invalid data provided",
      data: null,
    });
  }
  addMyHero(res, hero);
});

router.delete("/delete/:id", auth, (req, res) => {
  deleteMyHero(res, req.params.id, req.user.id);
});

router.get("/user", auth, (req, res) => {
  byUserID(res, req.user.id);
});

module.exports = router;
