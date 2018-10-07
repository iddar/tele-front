import React, { Component } from 'react';
import logo from './logo.svg';

import MapContent from './components/Map'
import LineChart from './components/Chart'
import SideBar from './components/SideBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="site">
        <MapContent />
        <div className="container">
          <div className="top">
            <SideBar />
          </div>
          <LineChart />
        </div>
      </div>
    );
  }
}

export default App;
