import React, { Component } from 'react';
import SourceItem from './SourceItem';
import './SourcesList.css';

class SourcesList extends Component {
  render() {
    let { sources } = this.props
    let total = sources.reduce((sum, item) => sum + item.total, 0)
    let amount = sources.reduce((sum, item) => sum + item.amount, 0)
    return (
      <div className='Sources'>
        {this.props.sources.map((source, idx) => (
          <SourceItem key={idx} item={source} />
        ))}

        <li>
        <div className='SourceItemIntern'>
          <div className='SourceLogoContainer'>
          <h3>Total</h3>
          </div>
          <div className='SourceItemAmount'>
            <p className='Totals'>
              <i>donativos</i>
              {total.toLocaleString()}
              <br />
            </p>
            <p className='Amount'>${amount.toLocaleString()} MXN</p>
          </div>
        </div>
      </li>
      </div>
    )
  }
}

export default SourcesList;