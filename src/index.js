import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import _ from 'lodash';
const API_KEY = "AIzaSyDsmbYKJWtZvJvrQGISsjQvOgizlakPCTw";

//Create a new component
class App extends Component {
  constructor(props){
      super(props);

      this.state = {
        videos: [],
        selectedVideo: null
       };

      this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return  (
      <div>
        <SearchBar onSearchTermChange={(term) => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

//put it to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
