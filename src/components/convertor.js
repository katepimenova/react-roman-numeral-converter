import _ from 'lodash';
import React from 'react';

let Convertor = React.createClass({
  getInitialState() {
    return {
      numeral: {arabic: 1, roman: 'I'}
    };
  },
  romanize(e) {
    const dict = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    let currentNumber = e.target.value;
    let result = '';

    if (currentNumber >= 1 && currentNumber <= 3999) {
      _.each(dict, (arabic, roman) => {
        while ( currentNumber >= arabic ) {
          result += roman;
          currentNumber -= arabic;
        }
      });
    }

    this.setState({numeral: {arabic: e.target.value, roman: result}});
  },
  render() {
    let {numeral} = this.state;
    return (
      <div className='convertor'>
        <div className='title row'>
          <div className='col-xs-5'>Please enter a number (between 1 and 3999):</div>
          <div className='col-xs-7'>Result:</div>
        </div>
        <div className='content row'>
          <div className='col-xs-5'>
            <input
              type='number'
              min='1'
              max='3999'
              onChange={this.romanize}
              value={numeral.arabic}
              placeholder='Please enter a number between 1 and 3999' className='form-control'
            />
          </div>
          <div className='col-xs-7 output'>
              {numeral.roman}
          </div>
        </div>
      </div>
    );
  }
});

export default Convertor;
