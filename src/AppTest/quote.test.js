import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../page/quote';

it('renders correctly', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
