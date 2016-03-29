import React, {Component} from 'react'
import VideoItem from './video_list_item'

class VideoList extends Component {
		render() {
		const onSelectVideo = this.props.onSelectVideo;
		const videoItems = this.props.videos.map((video) => {
			return (
				<VideoItem 
					key={video.etag} 
					video={video} 
					onSelectVideo={onSelectVideo} 
				/>);
		});

		return (
			<div>
			<ul className="col-md-4 list-group">
				{videoItems}
			</ul>
			</div>
		);
	}
}
export default VideoList;