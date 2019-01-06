import React, {Component} from 'react';

import MainStyles from '../styles/MainStyles';

import Details from './main/Details';
import VideoPlayer from './main/VideoPlayer';


export default class Main extends Component {
  render() {
    return (
      <div className="main-container" style={MainStyles.mainContainer}>
        <Details/>
        <VideoPlayer/>
      </div>
    )
  }
}