// src/components/Login.js
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add authentication logic here
    console.log('Login submitted with:', { email, password });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login to Ultimate Sports Emporium</h2>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />

        <button type="submit">Login</button>

        <h6>Don't have an account sign up!!!</h6>
      </form>
    </div>
  );
};

export default Login;
