const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = 5000;

http.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

io.on('connection', (socket) => {
    console.log('A user connected');
});


io.on('connection', (socket) => {
    socket.join('chat room');
    socket.on('chat message', (msg) => {
      io.to('chat room').emit('chat message', msg);
    });
});


// const socket = io();

// socket.on('chat message', (msg) => {
//   console.log('received message: ', msg);
// });


