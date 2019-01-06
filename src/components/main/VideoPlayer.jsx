import React, {Component} from 'react';
import ReactPlayer from 'react-player';

import RecommendationStyles from '../../styles/RecommendationStyles';

export default class PictureRecommendations extends Component {
  render() {
    return (
      <ReactPlayer
        playing
        url={[
          {src: '../../videos/raining.mp4', type: 'video/mp4'},
        ]}
        />
    )
  }
}