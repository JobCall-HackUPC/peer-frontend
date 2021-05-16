import React from 'react';
import JoinMeet from './WebRTC/JoinMeet';
import CreateMeet from './WebRTC/CreateMeet';

export default function WebRTC() {

  var path = window.location.pathname.split("/")
  if (path.length == 3 && path[2] !== "") {
    return (<JoinMeet idRemote={path[2]}/>)
  }

  return (
    <CreateMeet/>
  );
}
