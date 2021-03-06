'use strict';

const path = require("path");
const express = require("express");
const app = express();

// Heroku Port
app.set("port", process.env.PORT || 8080);
// Mounting **ui** folder (setting it as default)
app.use("/", express.static(path.resolve(__dirname, "../ui/")));



app.get("/questions", (req, res) => {
  console.log(req);
  console.log(questions);
  res.json(questions);
});

app.listen(app.get("port"), () => {
  console.log("Listening on port:", app.get("port"));
});
