import React from 'react';
import Calculator from './component/calculator';

class DisplayPage extends React.PureComponent {
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

export default DisplayPage;
