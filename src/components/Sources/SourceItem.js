import React, { Component } from 'react';

class SourceItem extends Component {
  render() {
    return (
      <li>
        <div className='SourceItemIntern'>
          <div className='SourceLogoContainer'>
            <img src={'./'+this.props.item.id+'.png'} className="SourceLogo" alt="logo" />
          </div>
          {/*
            <div className='SourceItemTitle'>
            <h3>{this.props.item.name}</h3>
          </div>
          */}
          <div className='SourceItemAmount'>
            <p className='Totals'>
              <i>donativos</i>
              {this.props.item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<br />
            </p>
            <p className='Amount'>${(this.props.item.amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} MXN</p>
          </div>
        </div>
      </li>
    );
  }
}

export default SourceItem;
