const express = require("express");
const app = express();

// data

// ============Routes ==============>

// ======= use of get===========>
app.get("/", (req, res) => {
  res.send("This is the use of get");
});

//====== use of post in postman ===========>

app.post("/home", (req, res) => {
  res.send("This is the use of post");
});

// ===================================>

app.listen("5000", () => {
  console.log("Server is running");
});
