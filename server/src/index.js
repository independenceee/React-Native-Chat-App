const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);



const PORT = 3000;



app.get("/", (request, response) => {
    response.send("Server");
})



io.on("connection", (socket) => {
    console.log("Connected");
    socket.on("join-room", ({roomId, userName}) => {
        console.log("user joined room");
        console.log(roomId, userName);
        socket.join(roomId);
        socket.to(roomId).emit("user-connected", userName)
    })
})

server.listen(PORT, function() {
    console.log(`http://localhost:${PORT}`)
})