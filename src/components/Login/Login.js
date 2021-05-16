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


  return (

    <div className="login-wrapper" align="center">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" align="center">
            <img src="/img/jobcall.png" width="20%" alt="Logo" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <Register />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <label>
                  <p>Username</p>
                  <div class="input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input type="text" class="form-control col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={e => setUserName(e.target.value)} />
                  </div>
                </label>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <label>
                  <p>Password</p>
                  <div class="input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <input type="password" onChange={e => setPassword(e.target.value)} class="form-control col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                  </div>
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