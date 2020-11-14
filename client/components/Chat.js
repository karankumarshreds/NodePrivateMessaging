import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

let socket;
let BACKEND_URI = 'http://localhost:3001';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, addMessages] = useState([]);
  // connect to the backend when page loads 
  useEffect(() => {
    // connect to the backend uri using socket 
    socket = io(BACKEND_URI);
    // broadcast the messages
    socket.on('new message', (data) => {
      addMessages(oldMessages => [...oldMessages, <li key={data}>{data}</li>]);
    });
    // disconnect when component gets unmounted
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
    setMessage('');
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
      <ul>
        {messages}
      </ul>
    </div>
  )
}

export default Chat;