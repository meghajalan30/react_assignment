import React from 'react';


const VideoDetail =(props) =>{
    if(!props.video){
        return(
            <p>Loading...</p>
        );
    }
console.log(props.video.id.videoId);
    const url='https://wwwyoutube.com/embed/'+props.video.id.videoId;//string interpolation
    return(
        <div >
            <div>
                <iframe src={url}></iframe>
            </div>
            <div>
                <h3>{props.video.snippet.title}</h3>
                <p>{props.video.snippet.description}</p>
            </div>
        </div>

    )
}
export default VideoDetail;