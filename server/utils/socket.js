// socket.js
const socketIo = require("socket.io");

const initializeSocket = (http) => {
  const socketIo = require("socket.io")(http, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  socketIo.on("connection", (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on("join_room", (data) => {
      socket.join(data);
    });

    socket.on("send_message", (data) => {
      socketIo.to(data.room).emit("receive_message", data);
    });

    socket.on("disconnect", () => {
      console.log("🔥: A user disconnected");
    });
  });
};

module.exports = initializeSocket;
