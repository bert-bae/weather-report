import React, {Component} from 'react';

import FooterStyles from '../styles/FooterStyles';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container" style={FooterStyles.footerContainer}>
        <a href="https://darksky.net/poweredby/" alt="https://darksky.net/poweredby/">Powered by Dark Sky</a>
        <p>Created by Elbert Bae. Weather Wear &copy; 2018</p>
      </div>
    )
  }
}