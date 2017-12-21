import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list.js';
import YTSearch from "youtube-api-search";
import VideoDetail from './components/video_details.js';
const API_KEY="AIzaSyB9tM06Qo7jehtKTlECbNpm9D_xaKcWqDs";
class App extends Component {

    constructor(props) {
        super(props);   //overwriting
        this.state = {
            videos: [],
            selectedVideo: ''
        }

    }


    videoSearch(term) {
        YTSearch({key: API_KEY, term:term},(videos) => {
            console.log(videos);
            this.setState({videos:videos,selectedVideo:videos[0]});
        });

    }

    render(){
        return (

            <div>
            <SearchBar onSearchTermChange={this.videoSearch.bind(this)}/>
                <VideoList videos={this.state.videos} onVideoSelect={ (video) => {
                    this.setState({
                        selectedVideo:video
                    })

                }}/>
                <VideoDetail video={this.state.selectedVideo}/>
            </div>

        );

    }
}
ReactDOM.render(<App/>,document.querySelector(".container")); //why querySelector and not getElementByClassName