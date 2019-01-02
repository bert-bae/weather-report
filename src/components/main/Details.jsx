import React, {Component} from 'react';

import DetailStyles from '../../styles/DetailStyles';

import Forecast from './details/Forecast';
import CurrentDetails from './details/CurrentDetails';

import {data} from '../../TempData';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: null,
      forecast: [],
    }
  }
  componentDidMount() {
    this.setState({
      focus: data.daily.data[0],
      forecast: data.daily.data,
    })
  }

  render() {
    return (
      <div className="weather-details-container" style={DetailStyles.detailContainer}>
        <Forecast data={this.state.forecast}/>
        <CurrentDetails/>
      </div>
    )
  }
}