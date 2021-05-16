import React from 'react';
import Peer from 'peerjs';


export default function JoinMeet ({ idRemote }) {

    const localVideo = React.useRef();
    const remoteVideo = React.useRef();

    const meeting = function() {
        console.log("MEETING");
        let peer = new Peer()
        var remote_id = idRemote
        peer.on('open', (id)=>{
            console.log("Connected with Id: "+id);
            const constraints = { 'video': true, 'audio': true };
            navigator.mediaDevices.getUserMedia(constraints).then( (stream) => {
                console.log("Join stream", stream);
                const videoElement = localVideo.current;
                videoElement.srcObject = stream;
                let call = peer.call(remote_id, stream) // no sé si es id remote o l'altra
                call.on('stream', (remote_stream)=>{
                    remoteVideo.current.srcObject = remote_stream;
                });
            });
        });
    };
    meeting();
    

    return (
        <div className = "row" align = "center" style={{padding:"10px"}}>
            <div className = "col-xs-12 col-sm-12 col-md-6 col-lg-6" align = "center " >
            <video ref={localVideo} width="100%" height="100%" autoPlay playsInline controls={false} />
            </div>
            <div className = "col-xs-12 col-sm-12 col-md-6 col-lg-6" align = "center d-inline">
            <video width="100%" height="100%" autoPlay playsInline controls={false} ref={remoteVideo} />
            </div>
        </div>
    );

}