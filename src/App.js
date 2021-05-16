// import {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WebRTC from './components/WebRTC.js';
import Formulari from './components/Formulari/Formulari.js';
// import useToken from './components/useToken.js';
import './App.css';
import Home from './components/Home.js'
import Login from './components/Login/Login.js';



// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }


export default function App() {

  // const { token, setToken } = useToken();
  


  return (
    <div className="wrapper" >
      <div className="background">
      <BrowserRouter>
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/webrtc">
            <WebRTC />
          </Route>
          <Route path="/form">
            <Formulari />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>v
      <br/><br/><br/><br/><br/><br/>
      </div>
    </div>
  );
}
