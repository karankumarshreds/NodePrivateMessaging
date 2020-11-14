import express from 'express';
import socketio from 'socket.io';
import http from 'http';

const PORT = 3001;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {

  socket.on('message', ({ message }) => {
    console.log(`User has sent message : ${message}`);
  });

});

server.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});