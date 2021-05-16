import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import './CreateMeet.css'
import Peer from 'peerjs';

export default function CreateMeet() {

  const [id, setId] = React.useState(null);
  const [peer, setPeer] = React.useState(null);
  const [opened, setOpened] = React.useState(true);
  const localVideo = React.useRef(null);
  const remoteVideo = React.useRef(null);
  const idRemote = React.useRef(null);


  const createPeer = async () => {
    console.log("hola");
    if (opened) {
      setOpened(false);
    }
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
      <div className="container pt-3" align="center">
        <h1>Create a SpeedDating</h1>
      </div>
      <form align="left" className="pt-3">
        <div className="gradientmeet arrodonit pb-3 pl-2 pr-2">
          <div className="row pt-2" align="center"><h2 className="whitelet">Pick some tags</h2></div>
          <div className="row p-3">
            <div className="col-md-3 mb-3">
              <input type="checkbox" />email
            </div>
            <div className="col-md-3 mb-3">
              <input type="checkbox"></input>gcloud
            </div>
            <div className="col-md-3 mb-3">
              <input type="checkbox"></input>go
            </div>
            <div className="col-md-3 mb-3">
              <input type="checkbox"></input>google-bigquery
            </div>
            <div className="col-md-3 mb-3">
              <input type="checkbox"></input>google-cloud-dataflow
            </div>
            <div className="col-md-3 mb-3">
              <input type="checkbox"></input>c
            </div>
            <div className="col-md-3 mb-3">
              <input type="checkbox"></input>googgoogle-cloud-endpointsle
            </div>
            <div className="col-md-3 mb-3">
              <input type="checkbox"></input>google-cloud-iam
            </div>
            <div className="col-md-3 mb-3">
              <input type="checkbox"></input>python
            </div>
            <div className="col-md-3 mb-3">
              <input type="checkbox"></input>docker
            </div>
            <div className="col-md-3 mb-3">
              <input type="checkbox"></input>node.js
            </div>
            <div className="col-md-3 mb-3">
              <input type="checkbox"></input>speech-recognition
            </div>
            <div className="col-md-3 mb-3">
              <input type="checkbox"></input>google-cloud-iam
            </div>
            <div className="col-md-3 mb-3">
              <input type="checkbox"></input>shell
            </div>
            <div className="col-xs-6 col sm-5 col-md-4 col-lg-3">
              <input type="checkbox"></input>Java
            </div>
            <div className="col-xs-6 col sm-5 col-md-4 col-lg-3">
              <input type="checkbox"></input>google-cloud-datastore
            </div>
            <div className="col-xs-6 col sm-5 col-md-4 col-lg-3">
              <input type="checkbox"></input>speech-to-text
            </div>
            <div className="col-xs-6 col sm-5 col-md-4 col-lg-3">
              <input type="checkbox" className="pr-1" />haskell
            </div>
            <div className="col-xs-6 col sm-5 col-md-4 col-lg-3">
              <input type="checkbox"></input>kotlin
            </div>
            <div className="col-xs-6 col sm-5 col-md-4 col-lg-3">
              <input type="checkbox"></input>pike
            </div>
          </div>
        </div>
      </form>

      {opened && (<Button type="submit" variant="contained" onClick={() => createPeer()} color="primary">
        Create Meet
            </Button>)}
      <video ref={localVideo} width="320" height="240" autoPlay playsInline controls={false} />
      <video width="320" height="240" autoPlay playsInline controls={false} ref={remoteVideo} />
    </div>
  );
}