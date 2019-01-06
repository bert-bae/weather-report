import React, {Component} from 'react';
import ReactPlayer from 'react-player';

import VideoStyles from '../../styles/VideoStyles';

export default class VideoPlayer extends Component {
  render() {
    return (
      <div className="video-container" style={VideoStyles.videoContainer}>
        <ReactPlayer
          playing
          url={[
            {src: './videos/raining.webm', type: 'video/webm'},
            {src: './videos/rainingsideways.webm', type: 'video/webm'},
          ]}
          />
      </div>
    )
  }
}