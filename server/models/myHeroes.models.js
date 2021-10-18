const query = require("../config/mysql.conf");

async function addMyHero(res, hero) {
  try {
    let { insertID } = await query(
      "INSERT INTO myHeroes SET ?",
      hero
      //   "INSERT INTO myHeroes (hero.url, hero.name, hero.user_id, hero.hero_id) VALUES (?, ?, ?, ?)",
      //   [hero.url, hero.name, hero.user_id, hero.hero_id]
    );
    return res.send({
      success: true,
      error: null,
      data: { ...hero, id: insertID },
    });
  } catch (e) {
    return res.send({
      success: false,
      error: "Something went wrong.",
      data: null,
    });
  }
}

async function deleteMyHero(res, id) {
  try {
    await query("DELETE FROM myHeroes WHERE myHeroes.id = ?", [id]);
    return res.send({
      success: true,
      error: null,
      data: "Successfully deleted.",
    });
  } catch (e) {
    return res.send({
      success: false,
      error: "Something went wrong.",
    });
  }
}

async function byUserID(res, user_id) {
  try {
    const myHeroes = await query(
      "SELECT * FROM myHeroes WHERE myHeroes.user_id = ?",
      [user_id]
    );
    return res.send({
      success: true,
      error: null,
      data: myHeroes,
    });
  } catch (e) {
    return res.send({
      success: false,
      error: "Something went wrong.",
      data: null,
    });
  }
}

module.exports = { addMyHero, deleteMyHero, byUserID };
