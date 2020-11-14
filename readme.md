### socket.broadcast.emit() vs io.sockets.emit()

**socket.broadcast.emit()** => instead of emitting to all connected sockets it will emit to all connected socket except the one it is being called on. So in this case the socket referenced by socket will not receive the event.

Where as **io.sockets.emit()** emits to all the connections.