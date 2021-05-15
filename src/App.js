import { Button } from '@material-ui/core';
import React from 'react';
import Peer from 'peerjs';

export default function App() {

  const [id, setId] = React.useState(null);
  const [peer, setPeer] = React.useState(null);
  const localVideo = React.useRef(null);
  const remoteVideo = React.useRef(null);
  const idRemote = React.useRef(null);

  const createPeer = async () => {
    var peer = new Peer();
    peer.on('open', function(id) {
      console.log('My peer ID is: ' + id);
      setId(id);
      setPeer(peer);
    });
  }

  async function playVideos() {
    callAndPlayVideoFromRemoteCamera();
    listenAndSendVideoFromRemoteCamera();
  }

  /*async function playVideoFromLocalCamera(){
    try {
      const constraints = {'video': true, 'audio': true};
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      console.log(localVideo);
      const videoElement = localVideo.current;
      videoElement.srcObject = stream;
  } catch(error) {
      console.error('Error opening video camera.', error);
  }
  }*/
  
  async function callAndPlayVideoFromRemoteCamera() {
    const constraints = {video: true, audio: true}
    navigator.mediaDevices.getUserMedia(constraints).then(stream => {
      console.log("Stream get", stream);
      const call = peer.call(idRemote.current, stream);
      call.on('stream', function(remoteStream)  {
          
          const videoElement = remoteVideo.current;
          remoteVideo.current.srcObject = remoteStream;
      });
    }, (err) => {
      console.error('Failed to get local stream', err);
    }).catch(error => {
      console.log("Error in calling", error);
    });
  }

  async function listenAndSendVideoFromRemoteCamera(){
    peer.on('call', (call) => {
      const constraints = {video: true, audio: true}
      navigator.mediaDevices.getUserMedia(constraints).then(stream => {
        call.answer(stream); // Answer the call with an A/V stream.
        call.on('stream', (remoteStream) => {
          const videoElement = remoteVideo.current;
          videoElement.srcObject = remoteStream;
        });
      }, (err) => {
        console.error('Failed to get local stream', err);
      });
    });
  }

  return (
    <div className = "container">
        <Button variant="contained" onClick={ () =>  createPeer()} color="primary">
        Join
      </Button>
      <div> 
        Checking...
      { id != null && <p>You're code is: {id}</p> }
      </div>
      <p>Enter the id of you mate:</p>
      <input ref = {idRemote}></input>
      <Button variant="contained" onClick={ () =>  playVideos()} color="primary">Call</Button>
      <video ref={localVideo} width="320" height="240" autoPlay playsInline controls={false}/>
      <video width="320" height="240" autoPlay playsInline controls={false} ref={remoteVideo}/>
    </div>
  );
}
