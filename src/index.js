import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

import YTSearch from'youtube-api-search';

const API_KEY = 'AIzaSyBwOQJ-HYCAxRxnS978IcBGlklg9tDYXyo';


// create App component to generate html element
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};
		YTSearch({key: API_KEY, term: 'sexy'}, (videos) => { 
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			 });
		});
	}

	render() {

		return (
			<div>
		   		<SearchBar />
		   		<VideoDetail video={this.state.selectedVideo} />
		   		<VideoList 
		   			videos={this.state.videos} 
		   			onSelectVideo={selectedVideo => this.setState({selectedVideo})}
		   		/>
		   	</div>
		);
	}	
}

// put component on DOM
ReactDOM.render(<App />, document.querySelector('.container'));

