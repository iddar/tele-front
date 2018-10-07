import React, { Component } from 'react';
import SourcesList from './SourcesList';

const baseUrl = "http://fae1f6a6.ngrok.io/api/v1"
const defaultUrl = baseUrl + "/sources/"

function getData (url = defaultUrl) {
  return fetch(url)
    .then(res => res.text())
    .then(text => JSON.parse(text))
}

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
    let {sources} = this.state;
    return (
      <div className='SourcesContainer'>
        <div className='SourcesNumber'>
          <div className='SourcesTitle'>
            <p>Aliados <i>({sources.length})</i></p>
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
