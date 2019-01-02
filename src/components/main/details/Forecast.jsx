import React, {Component} from 'react';

import DetailStyles from '../../../styles/DetailStyles';

export default class Forecast extends Component {
  render() {
    const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const renderForecast = this.props.data.map((day) => {
      let date = new Date(day.time * 1000);
      let dayOfWeek = weekdays[date.getDay()];
      let dayOfMonth = date.getDate();
      let monthOfYear = months[date.getMonth()];
      let year = date.getFullYear();
      day.time = [date, dayOfWeek, monthOfYear, dayOfMonth, year];
      let timeString = `${day.time[1]} ${day.time[3]}`;
      let temperatureAvg = Math.round((day.temperatureLow + day.temperatureHigh) / 2);
      let icon = this.props.selectIcon(day.icon);
      return (
        <div style={DetailStyles.weekdayContainer}>
          <p>{timeString}</p>
          {icon}
          <p>{temperatureAvg}°C</p>
        </div>
      )
    })
    return (
      <div className="forecast-container" style={DetailStyles.forecastContainer}>
        {renderForecast}
      </div>
    )
  }
}