import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Forum = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/messages');
        setMessages(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/messages', { content: newMessage });
      setMessages([...messages, response.data]);
      setNewMessage('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Forum</h2>
      <ul>
        {messages.map(message => (
          <li key={message._id}>
            <strong>{message.user.username}:</strong> {message.content}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Forum;
