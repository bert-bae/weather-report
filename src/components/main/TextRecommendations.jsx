import React, {Component} from 'react';

import RecommendationStyles from '../../styles/RecommendationStyles';

export default class PictureRecommendations extends Component {
  render() {
    return (
      <div className="text-recommendations" style={RecommendationStyles.pictureContainer}>
        <p>Picture stuff goes here</p>
      </div>
    )
  }
}