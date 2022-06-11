import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './component/calculator';
import HomePage from './pages/home';
import Navigate from './pages/navigate';

class DisplayPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <Navigate />
          <Routes>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default DisplayPage;
