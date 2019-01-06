import React, {Component} from 'react';

import Forecast from './details/Forecast';
import CurrentDetails from './details/CurrentDetails';

import DetailStyles from '../../styles/DetailStyles';

export default class Details extends Component {
  render() {
    return (
      <div className="weather-details-container" style={DetailStyles.detailContainer}>
        {this.props.focus && this.props.dailyForecast &&
          <div>
            <Forecast data={this.props.dailyForecast} selectIcon={this.props.selectIcon}/>
            <CurrentDetails data={this.props.focus} selectIcon={this.props.selectIcon} convertHours={this.props.convertHours}/>
          </div>
        }
      </div>
    )
  }
}