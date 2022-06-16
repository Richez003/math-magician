import React from 'react';
import renderer from 'react-test-renderer';
import Navigate from '../page/navigate'

it('renders correctly', () => {
    const tree = renderer.create(<Navigate />).toJSON();
    expect(tree).toMatchSnapshot();
  });