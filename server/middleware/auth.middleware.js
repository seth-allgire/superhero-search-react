const passport = require("passport");

async function auth(req, res, next) {
  passport.authenticate("jwt", (err, user, info) => {
    if (err) {
      return res.status(500).send({
        success: false,
        data: null,
        error: "Somthing went wrong. Please try again.",
      });
    }
    if (!user) {
      return res.status(403).send({
        success: false,
        data: null,
        error: "Invalid credentials",
      });
    }
    req.user = user;
    return next();
  })(req, res, next);
}

module.exports = auth;
