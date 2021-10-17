const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(req.ip);
  res.send("Hey There, Buddy!");
});

app.listen(port, () => console.log(`Superhero app listening on ${port}!`));
