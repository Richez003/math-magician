import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './component/calculator';
import HomePage from './page/home';
import Navigate from './page/navigate';
import Quotes from './page/quote';

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
            <Route path="/quote" element={<Quotes />} />
          </Routes>
        </Router>
      </>
    );
  }
}
export default DisplayPage;
