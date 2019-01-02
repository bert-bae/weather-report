import React, {Component} from 'react';
import HeaderStyles from '../styles/HeaderStyles';

// TODO: Implement react-router for sales and about page later

export default class Header extends Component {
  render() {
    const options = ['Home', 'Sales', 'About'];
    const listMenu = options.map((item) => {
      return (
        <li style={HeaderStyles.headerOptions}>{item}</li>
      )
    })
    return(
      <div className="header-container" style={HeaderStyles.headerContainer}>
        <h1>Weather Wear</h1>
        <ul style={HeaderStyles.headerList}>
          {listMenu}
        </ul>
      </div>
    )
  }
}
