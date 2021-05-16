import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Register from './Register/Register.js'

import './Login.css';


async function loginUser(credentials) {
 return fetch('http://jofre/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }


  return(
    
    <div className="login-wrapper">
      <div className="container">
        
        <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <Register/>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div className="col-xs-12">
        <label>
          
          <p>Username</p>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span><input type="text" onChange={e => setUserName(e.target.value)}/>
          </div>
        </label>
        </div>
        <div className="col-xs-12">
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        </div>
        <div className="col-xs-12" align="center">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      </div>
      </div></div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};