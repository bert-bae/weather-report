import React, {Component} from 'react';

import DetailStyles from '../../../styles/DetailStyles';

import {data} from '../../../TempData';

export default class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: null,
      forecast: [],
    }
    this.getCoreDataset = this.getCoreDataset.bind(this);
  }

  getCoreDataset = (set) => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const forecastData = set.daily.data;
    forecastData.forEach((day) => {
      let date = new Date(day.time * 1000);
      let dayOfWeek = weekdays[date.getDay()];
      let dayOfMonth = date.getDate();
      let monthOfYear = months[date.getMonth()];
      let year = date.getFullYear();
      set.time = [date, dayOfWeek, monthOfYear, dayOfMonth, year];
    })
  }

  componentDidMount() {
    this.getCoreDataset(data);
    this.setState({
      focus: data.daily.data[0],
      forecast: data.daily.data,
    })
  }

  render() {
    const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const renderForecast = this.state.forecast.map((day) => {
      let date = new Date(day.time * 1000);
      let dayOfWeek = weekdays[date.getDay()];
      let dayOfMonth = date.getDate();
      let monthOfYear = months[date.getMonth()];
      let year = date.getFullYear();
      day.time = [date, dayOfWeek, monthOfYear, dayOfMonth, year];
      let timeString = `${day.time[1]} ${day.time[3]}`;
      return (
        <div>
          <p>{timeString}</p>
          <p>{day.icon}</p>
          <p>{day.temperatureLow} - {day.temperatureHigh}</p>
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