import React from 'react';
import { Link } from 'react-router-dom';
import './navigate.css';

class Navigate extends React.PureComponent {
  render() {
    return (
      <header className="head">
        <h1>Math Magician</h1>
        <nav>
          <Link to="/">HomePage|</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/Quotes">|Quotes</Link>
        </nav>
      </header>

    );
  }
}
export default Navigate;
