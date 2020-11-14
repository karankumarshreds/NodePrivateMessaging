import React, { useEffect, useState } from 'react';
import Chat from '../components/Chat';

const index = () => {
  const [name, setName] = useState('');
  const [renderChat, setRenderChat] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setRenderChat(true);
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
    renderContent()
  )
}

export default index;