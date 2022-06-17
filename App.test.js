import '@testing-library/jest-dom/extend-expect';
import operate from './src/logic/operate';
import calculate from './src/logic/calculate';

describe('function test', () => {
  test('calculator.js test', () => {
    const value = {
      total: 0,
      next: null,
      operation: null,
    };
    const buttonName = '=';
    if (buttonName === '.') {
      expect(calculate(value, buttonName)).toEqual(
        { total: 0, next: null, operation: null },
      );
    } else if (buttonName === '.') {
      expect(calculate(value, buttonName)).toEqual(
        { total: 0.0, next: null, operation: null },
      );
    } else if (buttonName === '1') {
      expect(calculate(value, buttonName)).toEqual(
        { total: null, next: '1' },
      );
    } else if (buttonName === '=') {
      expect(calculate(value, buttonName)).toEqual({});
    }
  });
  test('operate.js addition test', () => {
    const numberOne = '1';
    const numberTwo = '2';
    const operation = '+';

    expect(operate(numberOne, numberTwo, operation)).toBe('3');
  });

  test('operate.js subtraction test', () => {
    const numberOne = '1';
    const numberTwo = '2';
    const operation = '-';

    expect(operate(numberOne, numberTwo, operation)).toBe('-1');
  });

  test('operate.js multiplication test', () => {
    const numberOne = '1';
    const numberTwo = '2';
    const operation = 'x';

    expect(operate(numberOne, numberTwo, operation)).toBe('2');
  });

  test('operate.js division test', () => {
    const numberOne = '1';
    const numberTwo = '2';
    const operation = '÷';

    expect(operate(numberOne, numberTwo, operation)).toBe('0.5');
  });

  test('operate.js division by 0 test', () => {
    const numberOne = '1';
    const numberTwo = '0';
    const operation = '÷';

    expect(operate(numberOne, numberTwo, operation)).toBe('Can\'t divide by 0.');
  });

  test('operate.js remainder test', () => {
    const numberOne = '5';
    const numberTwo = '2';
    const operation = '%';

    expect(operate(numberOne, numberTwo, operation)).toBe('1');
  });

  test('operate.js remainder when divide by 0 test', () => {
    const numberOne = '1';
    const numberTwo = '0';
    const operation = '%';

    expect(operate(numberOne, numberTwo, operation)).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});
