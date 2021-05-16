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


<<<<<<< HEAD
  return (
    <div className="register-wrapper">
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
=======
  return(
    <div className="register-wrapper" align="center">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <label>
          <p>Username</p>
          <div class="input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <input type="text" class="form-control col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="Username" onChange={e => setUserName(e.target.value)}/>
          </div>
        </label>
        <label>
          <p>Password</p>
          <div class="input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <input type="password" class="form-control col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
          </div>
        </label>
        <div>
        <label>
          <p>Email</p>
          <div class="input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <input type="password" class="form-control col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
          </div>
        </label>
        <label>
          <p>Enterprise</p>
          <div class="input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <input type="password" class="form-control col-xs-12 col-sm-12 col-md-12 col-lg-12" placeholder="Enterprise" onChange={e => setEnterprise(e.target.value)}/>
          </div>
        </label>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button type="submit" className="btn btn-primary" >Submit</button>
        </div>
        </div>
>>>>>>> 29fb25dd13b235b59c37f763f127a5c434fdf3d7
        </div>
      </form>
    </div>
  )
}