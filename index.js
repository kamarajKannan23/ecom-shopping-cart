const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const data = require("./data.json");

app.use(express.json());
app.use(cors());

// environment variables
//process.env.NODE_ENV = "development";

// uncomment below line to test this code against staging environment
//process.env.NODE_ENV = "staging";

app.get("/api/data", (req, res) => {
  res.send(data);
});

if (process.env.NODE_ENV === "production") {
  //ser static folder
  app.use(express.static("client/build"));

  //for heroku routers
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("listening to the port", port);
});
