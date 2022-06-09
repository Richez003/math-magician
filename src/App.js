import React from 'react';
import Calculator from './component/calculator';

class DisplayCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Calculator />
    );
  }
}

export default DisplayCalc;
