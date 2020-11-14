import express from 'express';
import socketio from 'socket.io';
import http from 'http';

const PORT = 3001;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

// keep track of all the users joining 
let users: {}[] = [];

io.on('connection', (socket) => {

  socket.on('message', ({ message }) => {
    // @ts-ignore
    io.sockets.emit('new message', { message, uid: socket.uid });
  });
  socket.on('new user', ({ user }, callback: (params: any) => void) => {
    try {
      callback(true);
      // associate socket with the individual user
      // @ts-ignore 
      socket.uid = user.uid;
      users.push(user);
      io.sockets.emit('users', { users });
    } catch (err) {
      callback(false);
    }
  });

});


server.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});