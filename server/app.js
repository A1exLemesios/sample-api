'use strict';

const path = require("path");
const express = require("express");
const app = express();

// Heroku Port
app.set("port", process.env.PORT || 8080);
// Mounting **ui** folder (setting it as default)
app.use("/", express.static(path.resolve(__dirname, "../ui/")));



app.get("/questions", (req, res) => {
  const questions = ["Question 1", "Question 2", "Question 3", "Question 4"]
  res.json(questions);
});

app.listen(app.get("port"), () => {
  console.log("Listening on port:", app.get("port"));
});
