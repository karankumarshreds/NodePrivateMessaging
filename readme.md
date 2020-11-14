### socket.broadcast.emit() vs io.sockets.emit()

socket.broadcast.emit() behaves similar to io.sockets.emit, but instead of emitting to all connected sockets it will emit to all connected socket except the one it is being called on. So in this case the socket referenced by socket will not receive the event.