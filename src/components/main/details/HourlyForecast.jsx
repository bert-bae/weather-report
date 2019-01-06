import React, {Component} from 'react';
import DetailStyles from '../../../styles/DetailStyles';

export default class HourlyForcast extends Component {
  render() {
    const hourlyData = this.props.data.slice(0, 12);
    const renderHourly = hourlyData.map((hour) => {
      let time = this.props.convertHours(hour.time);
      let icon = this.props.selectIcon(hour.icon);
      return (
        <div style={DetailStyles.hourContainer}>
          <p>{time}</p>
          {icon}
          <p>{hour.summary}</p>
          <p>Precipitation: {Math.round(hour.precipProbability * 100)}%</p>
          <p>Wind Speed: {Math.round(hour.windSpeed)}km/h</p>
        </div>
      )
    })
    return (
      <div className="hourly-forecast" style={DetailStyles.hourlyForecastContainer}>
        {renderHourly}
      </div>
    )
  }
}