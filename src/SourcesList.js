import React, { Component } from 'react';
import SourceItem from './SourceItem';
import './SourcesList.css';

class SourcesList extends Component {
  render() {
    return (
      <div className='Sources'>
        {this.props.sources.map((source) => (
          <SourceItem key={source.index} item={source} />
        ))}
      </div>
    )
  }
}

export default SourcesList;