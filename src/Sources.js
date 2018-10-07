import React, { Component } from 'react';
import SourcesList from './SourcesList';

const baseUrl = "http://fae1f6a6.ngrok.io/api/v1"
const defaultUrl = baseUrl + "/sources/"

function getData (url = defaultUrl) {
  return fetch(url)
    .then(res => res.text())
    .then(text => JSON.parse(text))
}

const sources = [
    {
        "amount": 42841296.33,
        "id": 0,
        "name": "Banamex",
        "totals": 10220
    },
    {
        "amount": 0,
        "id": 1,
        "name": "Farmacias del Ahorro",
        "totals": 10220
    },
    {
        "amount": 0,
        "id": 2,
        "name": "Infinitum",
        "totals": 1220
    },
    {
        "amount": 0,
        "id": 3,
        "name": "Soriana",
        "totals": 120
    },
    {
        "amount": 0,
        "id": 4,
        "name": "Telcel",
        "totals": 100220
    },
    {
        "amount": 0,
        "id": 5,
        "name": "Telecomm",
        "totals": 2220
    },
    {
        "amount": 1299000,
        "id": 6,
        "name": "Telmex",
        "totals": 3220
    }
]

class Sources extends Component {
  constructor(props, ctx) {
    super(props, ctx)
    this.state = {
      sources: []
    }
  }

  componentDidMount() {
    getData()
      .then((data) => {
        this.setState({sources: data})
        console.log('data =>'+ data)
      })
  }
  render() {
    let sources;
    if (this.state.sources){
        sources = this.state.sources
    } else {
        sources = []
    }
    return (
      <div className='SourcesContainer'>
        <div className='SourcesNumber'>
          <div className='SourcesTitle'>
            <p><i>{sources.length}</i> Fuentes</p>
          </div>
        </div>
        <div className="Sources">
          <SourcesList sources={sources}/>
        </div>
      </div>
    );
  }
}

export default Sources;
