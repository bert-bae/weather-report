import React, {Component} from 'react';
import ReactPlayer from 'react-player';

import RecommendationStyles from '../../styles/RecommendationStyles';

export default class PictureRecommendations extends Component {
  render() {
    return (
      <div className="photo-recommendations" style={RecommendationStyles.videoContainer}>
        <p>Picture stuff goes here</p>
      </div>
    )
  }
}