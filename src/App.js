import {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WebRTC from './components/WebRTC.js';
import Login from './components/Login/Login.js';
import useToken from './components/useToken.js';


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}


export default function App() {

  const { token, setToken } = useToken();
  

   if(!token) {
     return <Login setToken={setToken} />
   }


  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/webrtc">
            <WebRTC />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
