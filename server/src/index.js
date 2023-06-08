const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);



const PORT = 3000;



app.get("/", (request, response) => {
    response.send("Server");
})

const users = [];
const addUser = function(userName, roomId) {
    users.push(
        {
            userName: userName, 
            roomId: roomId
        }
    )
}

const userleave = function(userName) {
    users = users.filter(user => user.userName != userName)
}

const getRoomUsers = function(roomId) {
    return users.filter((user)=> (user.roomId == roomId))
}



io.on("connection", (socket) => {
    console.log("Connected");
    socket.on("join-room", ({roomId, userName}) => {
        if(roomId && userName) {
            socket.join(roomId);
            addUser(userName, roomId)
            socket.to(roomId).emit("user-connected", userName);
            io.to(roomId).emit("all-users", getRoomUsers(roomId));
        }
        socket.on("disconnect", function() {
            console.log("Connected");
            socket.leave(roomId);
            userleave(userName);
            io.to(roomId).emit("all-users", getRoomUsers(roomId))
        })
    })
})

server.listen(PORT, function() {
    console.log(`http://localhost:${PORT}`)
})

