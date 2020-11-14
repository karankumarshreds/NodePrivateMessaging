import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Chat from '../components/Chat';
import io from 'socket.io-client';

let socket;
let BACKEND_URI = 'http://localhost:3001';

const index = () => {
  const [name, setName] = useState('');
  let user;
  const [users, setUsers] = useState([]);
  const [renderChat, setRenderChat] = useState(false);
  useEffect(() => {
    socket = io(BACKEND_URI);
    // listen for the new users 
    socket.on('users', ({ users }) => {
      console.log(`New list of users ${JSON.stringify(users)}`);
    });
  }, [user]);
  // save the user and show the chat feature 
  const onSubmit = async (e) => {
    e.preventDefault();
    setRenderChat(true);
    user = {
      uid: uuidv4(),
      name
    }
    socket.emit('new user', { user }, (bool) => {
      console.log(`The new user was created: ${bool}`);
    });
    setName('');
  };
  const renderContent = () => {
    if (renderChat) {
      return <Chat />
    } else {
      return <form onSubmit={e => onSubmit(e)}>
        <input
          onChange={e => setName(e.target.value)}
          placeholder="Enter your name"
          value={name}
        />
        <button type="submit">Enter the chat</button>
      </form>
    }
  }
  return (
    <div>
      <ul>
        {users.length > 0 && users.map(user => <li key={user.uid}>{user.name}</li>)}
      </ul>
      {renderContent()}
    </div>
  )
}

export default index;