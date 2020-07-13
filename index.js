const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const data = require("./data.json");

app.use(express.json());
app.use(cors());

console.log(process.env);
const port = process.env.PORT || 8080;

app.get("/api/data", (req, res) => {
  res.send(data);
});

app.use(express.static(path.join(__dirname, "shopping-cart/build")));

//for heroku routers
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/shopping-cart/build/index.html"));
});

app.listen(port, () => {
  console.log("listening to the port", port);
});
