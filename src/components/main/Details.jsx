import React, {Component} from 'react';

import DetailStyles from '../../styles/DetailStyles';

import Forecast from './details/Forecast';
import CurrentDetails from './details/CurrentDetails';

export default class Details extends Component {
  render() {
    return (
      <div className="weather-details-container" style={DetailStyles.detailContainer}>
        <Forecast/>
        <CurrentDetails/>
      </div>
    )
  }
}