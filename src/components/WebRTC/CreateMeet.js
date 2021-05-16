import React from 'react';
import { Button } from '@material-ui/core';
import Peer from 'peerjs';


export default function CreateMeet() {

    const [id, setId] = React.useState(null);
    const [peer, setPeer] = React.useState(null);
    const localVideo = React.useRef(null);
    const remoteVideo = React.useRef(null);
    const idRemote = React.useRef(null);



  const send_peer_id = async (id) => {
    console.log( await fetch('http://jofre/call/'+id));
  }

  const createPeer = async () => {
    var peer = new Peer();
    var local_stream;
    peer.on('open', function (id) {
      console.log('My peer ID is: ' + id);
      send_peer_id(id);
        

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
          <div className="row d-inline">
          <div className = "row" align = "center" style={{padding:"10px"}}>
            <div className = "col-xs-12 col-sm-12 col-md-6 col-lg-6" align = "center" >
              <video ref={localVideo} width="100%" height="100%" autoPlay playsInline controls={false} />
            </div>
            <div className = "col-xs-12 col-sm-12 col-md-6 col-lg-6" align = "center">
              <video width="100%" height="100%" autoPlay playsInline controls={false} ref={remoteVideo} />
            </div>
            </div>
            <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12" align = "center" style={{padding:"10px"}}>
              <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                <label for="floatingTextarea2">Comments</label>
              </div>
              <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{"padding-top" : "15px"}}>
              <Button variant="contained" onClick={() => createPeer()} color="primary">
                Create Meet
              </Button>
              </div>
          </div>
          </div>
      </div>
    );
}