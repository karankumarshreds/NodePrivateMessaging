// imports 
const http = require('http');
const socketio = require('socket.io');
const express = require('express');

// configs
const app = express();
const server = http.createServer(app);
const io = socketio(server);


server.listen(3000, () => {
  console.log('Server listening at 3000');
});