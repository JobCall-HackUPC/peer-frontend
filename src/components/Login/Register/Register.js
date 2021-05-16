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


  return (
    <div className="register-wrapper register-gradient p-4">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <label>
              <p>Username</p>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" onChange={e => setUserName(e.target.value)} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
              </div>
            </label>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">

            <label>
              <p>Password</p>
              <div class="input-group mb-3">
                <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
              </div>
            </label>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <label>
                <p>Email</p>
                <div class="input-group mb-3">
                  <input type="text" className="form-control" onChange={e => setEmail(e.target.value)} placeholder="Email" aria-label="Email" aria-describedby="basic-addon2" />
                </div>
              </label>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">

              <label>
                <p>Enterprise</p>
                <div class="input-group mb-3">
                  <input type="text" className="form-control" onChange={e => setEnterprise(e.target.value)} placeholder="Enterprise" aria-label="Enterprise" aria-describedby="basic-addon2" />
                </div>
              </label>
            </div>
          </div>
          <div className="col-xs-12" align="center">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}