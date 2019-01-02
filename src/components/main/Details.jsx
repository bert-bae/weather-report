import React, {Component} from 'react';

import Forecast from './details/Forecast';
import CurrentDetails from './details/CurrentDetails';

import DetailStyles from '../../styles/DetailStyles';
import {data} from '../../TempData';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: null,
      dailyForecast: [],
    }
  }

  componentDidMount() {
    this.setState({
      focus: data.hourly.data,
      dailyForecast: data.daily.data,
    })
  }

  render() {
    const selectIcon = (data) => {
      switch (data) {
        case "rain":
          return <i className="fas fa-cloud-rain"></i>;
        case "fog":
          return <i className="fab fa-cloudversify"></i>;
        case "partly-cloudy-day":
          return <i className="fas fa-cloud-sun"></i>;
        case "partly-cloudy-night":
          return <i className="fas fa-cloud-sun"></i>;
        case "snow":
          return <i className="far fa-snowflake"></i>;
        case "clear":
          return <i className="far fa-sun"></i>;
        case "windy":
          return <i className="fas fa-wind"></i>;
        default:
          return <i className="far fa-sun"></i>;
      }
    }

    const convertHours = (data) => {
      let result = new Date(data * 1000).getHours();
      if (result > 12) {
        result = result - 12 + " PM";
      } else if (result === 0) {
        result = "Midnight";
      } else {
        result = result + " AM"
      }
      return result;
    }

    return (
      <div className="weather-details-container" style={DetailStyles.detailContainer}>
        {this.state.focus && this.state.dailyForecast &&
          <div>
            <Forecast data={this.state.dailyForecast} selectIcon={selectIcon}/>
            <CurrentDetails data={this.state.focus} selectIcon={selectIcon} convertHours={convertHours}/>
          </div>
        }
      </div>
    )
  }
}