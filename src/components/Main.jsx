import React, {Component} from 'react';

import MainStyles from '../styles/MainStyles';

import Details from './main/Details';
import VideoPlayer from './main/VideoPlayer';

import {data} from '../TempData';

export default class Main extends Component {
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
          return <i className="fas fa-cloud-rain" style={{color: 'grey'}}></i>;
        case "fog":
          return <i className="fab fa-cloudversify" style={{color: 'grey'}}></i>;
        case "partly-cloudy-day":
          return <i className="fas fa-cloud-sun" style={{color: 'grey'}}></i>;
        case "partly-cloudy-night":
          return <i className="fas fa-cloud-sun" style={{color: 'gold'}}></i>;
        case "snow":
          return <i className="far fa-snowflake" style={{color: 'grey'}}></i>;
        case "clear":
          return <i className="far fa-sun" style={{color: 'gold'}}></i>;
        case "windy":
          return <i className="fas fa-wind" style={{color: 'grey'}}></i>;
        default:
          return <i className="far fa-sun" style={{color: 'gold'}}></i>;
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
      <div className="main-container" style={MainStyles.mainContainer}>
        <Details
          dailyForecast={this.state.dailyForecast} 
          focus={this.state.focus}
          selectIcon={selectIcon}
          convertHours={convertHours}/>
        <VideoPlayer focus={this.state.focus}/>
      </div>
    )
  }
}