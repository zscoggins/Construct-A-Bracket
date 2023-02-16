import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/auth/register', { email, password, username });
      const { token } = response.data;
      localStorage.setItem('token', token);
      handleLogin();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;