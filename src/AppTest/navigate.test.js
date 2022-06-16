import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navigate from '../page/navigate'

it('NavBar component should perform correctly on initial run', () => {
    const tree = renderer.create(<Router><Navigate /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });