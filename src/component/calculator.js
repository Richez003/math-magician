import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const result = {
    total: 0,
    next: '',
    operation: '',
  };
  const [state, setState] = useState(result);

  const { total, next, operation } = state;

  const clickEvent = (e) => {
    const Value = e.target.value;
    const currentState = calculate(state, Value);
    setState(currentState);
  };

  return (
    <div className="mainContainer">
      <div className="valueInputs">
        <p className="displayResult">
          {total}
          {' '}
          {operation}
          {' '}
          {next}
          {' '}
        </p>
      </div>
      <div className="calcBody">
        <button onClick={clickEvent} type="button" className="btn" value="AC">AC</button>
        <button onClick={clickEvent} type="button" className="btn" value="+/-">+/-</button>
        <button onClick={clickEvent} type="button" className="btn" value="%">%</button>
        <button onClick={clickEvent} type="button" className="btn btnclick" value="÷">÷</button>
        <button onClick={clickEvent} type="button" className="btn" value="7">7</button>
        <button onClick={clickEvent} type="button" className="btn" value="8">8</button>
        <button onClick={clickEvent} type="button" className="btn" value="9">9</button>
        <button onClick={clickEvent} type="button" className="btn btnclick" value="x">x</button>
        <button onClick={clickEvent} type="button" className="btn" value="4">4</button>
        <button onClick={clickEvent} type="button" className="btn" value="5">5</button>
        <button onClick={clickEvent} type="button" className="btn" value="6">6</button>
        <button onClick={clickEvent} type="button" className="btn btnclick" value="-">-</button>
        <button onClick={clickEvent} type="button" className="btn" value="1">1</button>
        <button onClick={clickEvent} type="button" className="btn" value="2">2</button>
        <button onClick={clickEvent} type="button" className="btn" value="3">3</button>
        <button onClick={clickEvent} type="button" className="btn btnclick" value="+">+</button>
        <button onClick={clickEvent} type="button" className="btnZero" value="0">0</button>
        <button onClick={clickEvent} type="button" className="btn" value=".">.</button>
        <button onClick={clickEvent} type="button" className="btn btnclick" value="=">=</button>
      </div>
    </div>
  );
};

export default Calculator;
