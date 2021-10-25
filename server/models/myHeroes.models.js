const query = require("../config/mysql.conf");

async function addMyHero(res, hero) {
  try {
    await query("INSERT INTO myHeroes SET ?", hero);

    return res.send({
      success: true,
      error: null,
      data: hero,
    });
  } catch (e) {
    return res.send({
      success: false,
      error: "Something went wrong.",
      data: null,
    });
  }
}

async function deleteMyHero(res, id, user_id) {
  try {
    await query(
      "DELETE FROM myHeroes WHERE myHeroes.hero_id = ? AND myHeroes.user_id = ?",
      [id, user_id]
    );
    return res.send({
      success: true,
      error: null,
      data: id,
    });
  } catch (e) {
    return res.send({
      success: false,
      error: "Something went wrong.",
      data: null,
    });
  }
}

async function byUserID(res, user_id) {
  try {
    const myHeroes = await query(
      "SELECT name, hero_id, url, alignment FROM myHeroes WHERE myHeroes.user_id = ?",
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
