import React, {Component} from 'react'

class VideoItem extends Component {
	render() {
		console.log(this.props.video);
		const video = this.props.video;
		const url = video.snippet.thumbnails.default.url;
		console.log(url);
		const title = video.snippet.title;
		const onSelectVideo = this.props.onSelectVideo;

		return (
			<li onClick={() => onSelectVideo(video)} className="list-group-item">
				<div className="video-list media">
					<div className="media-left">
						<img className="media-object" src={url}/>
					</div>
					<div className="media-body">
						<div className="media-heading">{title}</div>
					</div>
				</div>



			</li>
		);
	}
}

export default VideoItem;