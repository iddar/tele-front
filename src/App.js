import React, { Component } from 'react';
import logo from './logo.svg';

import MapContent from './components/Map'
import LineChart from './components/Chart'
import SideBar from './components/SideBar'
import './App.css';

const baseUrl = "http://fae1f6a6.ngrok.io/api/v1"
const defaultUrl = baseUrl + "/map/?time=1420092000"
function getData (url = defaultUrl) {
  return fetch(url).then(res => res.json())
}

class App extends Component {
  constructor(props, ctx) {
    super(props, ctx)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    getData()
      .then(({data, next}) => {
        this.setState({list: data})
        console.log(data[0])
      })
  }

  render() {
    return (
      <div className="site">
        <MapContent data={this.state.list} />
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
