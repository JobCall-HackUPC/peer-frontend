import React from 'react';
import Peer from 'peerjs';


export default function JoinMeet ({ idRemote }) {

    const localVideo = React.useRef(null);
    const remoteVideo = React.useRef(null);

    let peer = new Peer()
    var remote_id = idRemote
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

    return (
        <div>
        <video ref={localVideo} width="320" height="240" autoPlay playsInline controls={false} />
        <video width="320" height="240" autoPlay playsInline controls={false} ref={remoteVideo} />
        </div>
    );

}