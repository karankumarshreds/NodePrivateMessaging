import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

let socket;
let BACKEND_URI = 'http://localhost:3001';

const index = () => {
  const [message, setMessage] = useState('');
  // connect to the backend when page loads 
  useEffect(() => {
    // connect to the backend uri using socket 
    socket = io(BACKEND_URI);
    // socket.emit('join', { name: 'Karan' }, ({ error }) => {
    //   console.log(error);
    // });
    // disconnect when component unmounts
    return () => {
      socket.emit('disconnect');
      socket.off();
      console.log('Disconnecting the room');
    }
  }, []);
  // function to send the message
  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('message', { message });
  };
  return (
    <div>
      <h1>Socket io private messaging</h1>
      <form onSubmit={e => sendMessage(e)}>
        <input placeholder="Type message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Send message</button>
      </form>
    </div>
  )
}

export default index;