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
    var local_stream;
    peer.on('open', function (id) {
      console.log('My peer ID is: ' + id);
      const constraints = { 'video': true, 'audio': true };
      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        console.log(localVideo);
        local_stream = stream;
        const videoElement = localVideo.current;
        videoElement.srcObject = stream;
        setId(id);
        setPeer(peer);
      })

    });
    peer.on('call', (call) => {
      call.answer(local_stream);
      call.on('stream', (remote_stream) => {
        console.log("Has remote_stream");
        remoteVideo.current.srcObject = remote_stream;
      })
    });
  }


  async function playVideoFromLocalCamera() {
    try {
      const constraints = { 'video': true, 'audio': true };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      console.log(localVideo);
      const videoElement = localVideo.current;
      videoElement.srcObject = stream;
    } catch (error) {
      console.error('Error opening video camera.', error);
    }
  }

  async function joinMeet() {
    let peer = new Peer()
    var remote_id = idRemote.current.value
    peer.on('open', (id)=>{
        console.log("Connected with Id: "+id);
        const constraints = { 'video': true, 'audio': true };
        navigator.mediaDevices.getUserMedia(constraints).then( (stream)=>{
          console.log("Join stream", stream);
          const videoElement = localVideo.current;
          videoElement.srcObject = stream;
            let call = peer.call(remote_id, stream) // no sé si es id remote o l'altra
            call.on('stream', (remote_stream)=>{
                remoteVideo.current.srcObject = remote_stream;
            })
        });
    })
  }

  async function answerCall() {
    peer.on('call', (call) => {
      console.log("CallAnswer", call);
      call.answer("Peer on Answer Call");
      const constraints = { video: true, audio: true }
      navigator.mediaDevices.getUserMedia(constraints).then(stream => {
        console.log("Answer Stream get", stream);
        let call = peer.call()
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
    <div className="container">
      <Button variant="contained" onClick={() => createPeer()} color="primary">
        Create Meet
      </Button>
      <div>
        Checking...
      {id != null && <p>You're code is: {id}</p>}
      </div>
      <p>Enter the id of you mate:</p>
      <input ref={idRemote}></input>
      <Button variant="contained" onClick={() => joinMeet()} color="primary">Join Meet</Button>
      <video ref={localVideo} width="320" height="240" autoPlay playsInline controls={false} />
      <video width="320" height="240" autoPlay playsInline controls={false} ref={remoteVideo} />

      <Button variant="contained" onClick={() => answerCall()} color="primary">Answer</Button>
      <Button variant="contained" onClick={() => playVideoFromLocalCamera()} color="primary">Display local video</Button>
    </div>
  );
}
