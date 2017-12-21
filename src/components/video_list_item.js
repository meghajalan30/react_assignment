import React, {Component} from 'react';
const VideoListItem =(props) => {
   const video=props.video;
   return (
       //two levels of onVideoSelect(index to videolist to videolistitem)
       <li onClick={() =>{props.onVideoSelect(video)}}>
           <div><div>
           <img src={video.snippet.thumbnails.default.url}/></div>
           <div>{video.snippet.title}</div></div>
       </li>

   )
}
export default VideoListItem;