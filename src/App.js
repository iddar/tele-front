import React, { Component } from 'react';
import logo from './logo.svg';

import MapContent from './components/Map'
import LineChart from './components/Chart'
import SideBar from './components/SideBar'
import Header from './components/Header'
import './App.css';

const baseUrl = "http://fae1f6a6.ngrok.io/api/v1"
const defaultUrl = baseUrl + "/map/?time=1420092000&limit=100"

const dalay = 500

function getData (url = defaultUrl) {
  return fetch(url)
    .then(res => res.json())
    .then(({data, next}) => {
      this.setState({list: data})
      setTimeout(getData.bind(this, next), dalay);
    })
}

function getPlaces (url = 'http://fae1f6a6.ngrok.io/api/v1/centros/') {
  return fetch(url)
    .then(res => res.json())
}

class App extends Component {
  constructor(props, ctx) {
    super(props, ctx)
    this.state = {
      list: [],
      places: []
    }
  }

  componentDidMount() {
    getData.call(this)
    getPlaces().then(({results}) => {
      this.setState({places: results})
    }).catch(e => null)
  }

  render() {
    let {places, list} = this.state

    return (
      <div>
        <Header />

        <div className="site">
        <MapContent data={list} places={places} />
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
