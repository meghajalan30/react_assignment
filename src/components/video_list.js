import React from 'react';
import VideoListItem from './video_list_item';
const VideoList =(props) => {
   console.log("props:" + props.videos);

  const videoListItem= props.videos.map((videos) => {
       return (<VideoListItem video={videos}
                              onVideoSelect={props.onVideoSelect}
           key={videos.etag}/>
       )
       }
   );
        return (
            <div>
                <ul>
                    {videoListItem}
                </ul>
            </div>
        );
    }
export default VideoList;

