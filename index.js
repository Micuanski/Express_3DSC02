const express = require("express");
const app = express();

const PORT = 3303;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/views/index.html");
});
app.get("/sobre", function (req, res) {
  res.sendFile(__dirname + "/src/views/about.html");
});
app.listen(PORT, () => {
  console.log("running...");
});
