require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 8080;
const userRoutes = require("./server/routes/users.routes");
const myHeroesRoutes = require("./server/routes/myHeroes.routes");
const passport = require("./server/config/passport.conf");

app.use(express.json());
app.use(express.static(__dirname + "/build"));
app.use(cookieParser());
app.use(passport.initialize());
app.use("/api/users", userRoutes);
app.use("/api/myHeroes", myHeroesRoutes);

app.get("*", (req, res) => {
  return res.sendFile("/build/index.html", { root: __dirname + "/" });
});

app.listen(PORT, () => console.log(`Superhero app listening on ${PORT}!`));
