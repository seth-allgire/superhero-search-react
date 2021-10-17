const query = require("../config/mysql.conf");
const bcrypt = require("bcrypt");

async function createAccount(res, username, password) {
  try {
    const [user] = await query("SELECT * FROM users WHERE users.username = ?", [
      username,
    ]);
    if (user) {
      return res.send({
        success: false,
        error: "Username already taken",
        data: null,
      });
    }
    const hash = await bcrypt.hash(password, 10);
    await query("INSERT INTO users (username, password) VALUES (?,?)", [
      username,
      hash,
    ]);
    return res.send({
      success: true,
      error: null,
      data: "New account successfully created!",
    });
  } catch (e) {
    return res.send({
      success: false,
      error: "Something went wrong. Please try again.",
      data: null,
    });
  }
}

async function login(res, username, password) {
  try {
    const [user] = await query("SELECT * FROM users WHERE users.username = ?", [
      username,
    ]);
    if (!user) {
      return res.send({
        success: false,
        error: "Invalid username",
        data: null,
      });
    }
    let matches = await bcrypt.compare(password, user.password);
    if (!matches) {
      return res.send({
        success: false,
        error: "Invalid password",
        data: null,
      });
    }
    return res.send({
      success: true,
      error: null,
      data: { username: user.username, id: user.id },
    });
  } catch (e) {
    return res.send({
      success: false,
      error: "Something went wrong. Please try again.",
      data: null,
    });
  }
}

module.exports = { createAccount, login };
