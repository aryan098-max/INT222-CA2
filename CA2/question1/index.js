const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server);
const path = require("path");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/home", (req, res) => {
  res.render("home.ejs");
});
// ========Run when Client connects=====================>

io.on("connection", (socket) => {
  // =======================Support Link==================>
  socket.on("support", () => {
    socket.emit("serverMessage", "How can I help you");
  });
});

//==================================>

server.listen(3005, () => {
  console.log("Server is running");
});
