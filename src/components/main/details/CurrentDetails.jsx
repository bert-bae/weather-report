import React, {Component} from 'react';
import HourlyForecast from './HourlyForecast';

export default class CurrentDetails extends Component {
  render() {
    return (
      <div>
        <h3>Date goes here</h3>
        <div className="details-container">
          <HourlyForecast data={this.props.data} selectIcon={this.props.selectIcon} convertHours={this.props.convertHours}/>
        </div>
      </div>
    )
  }
}