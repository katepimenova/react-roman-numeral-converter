import React from 'react';
import Convertor from './convertor';
import '../stylesheets/main.scss';

let App = React.createClass({
  render() {
    const title = 'Roman Numeral Converter';
    return (
      <div className='container'>
        <h1>{title}</h1>
        <Convertor />
      </div>
    );
  }
});

export default App;

