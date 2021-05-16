import React from 'react';
import { Button } from '@material-ui/core';
import Peer from 'peerjs';


export default function CreateMeet() {

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

    return (
        <div className="container">
        <Button variant="contained" onClick={() => createPeer()} color="primary">
          Create Meet
        </Button>
        <video ref={localVideo} width="320" height="240" autoPlay playsInline controls={false} />
        <video width="320" height="240" autoPlay playsInline controls={false} ref={remoteVideo} />
      </div>
    );
}