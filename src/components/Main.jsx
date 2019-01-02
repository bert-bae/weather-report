import React, {Component} from 'react';

import Details from './main/Details';

export default class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <Details/>
        <div className="photo-recommendations">

        </div>
        <div className="text-recommendations">

        </div>
      </div>
    )
  }
}