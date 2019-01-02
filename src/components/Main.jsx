import React, {Component} from 'react';

import MainStyles from '../styles/MainStyles';

import Details from './main/Details';
import PictureRecommendations from './main/PictureRecommendations';
import TextRecommendations from './main/TextRecommendations';


export default class Main extends Component {
  render() {
    return (
      <div className="main-container" style={MainStyles.mainContainer}>
        <Details/>
        <PictureRecommendations/>
        <TextRecommendations/>
      </div>
    )
  }
}