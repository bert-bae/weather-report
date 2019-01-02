import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Index extends Component {
  render() {
    return(
      <h1>Hello</h1>
    )
  }
}

const element = document.getElementById('root');

ReactDOM.render(<Index/>, element);