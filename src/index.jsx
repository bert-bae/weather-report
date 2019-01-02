import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


class Index extends Component {
  render() {
    return(
      <div>
        <div className="main">
          <Header/>
          <Main/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    )
  }
}

const element = document.getElementById('root');

ReactDOM.render(<Index/>, element);