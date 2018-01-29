import React, { Component } from 'react';
import './App.scss';
import {Header, OrderPage} from './containers/index';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <OrderPage/>
      </div>
    );
  }
}

export default App;