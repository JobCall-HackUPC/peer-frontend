import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Register.css';


async function register(credentials) {
 return fetch('http://localhost:8080/register', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Register({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [enterprise, setEnterprise] = useState();


  const handleSubmit = async e => {
    e.preventDefault();
    const token = await register({
      username,
      password,
      email,
      enterprise
    });
  }


  return(
    <div className="register-wrapper">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Enterprise</p>
          <input type="text" onChange={e => setEnterprise(e.target.value)}/>
        </label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}