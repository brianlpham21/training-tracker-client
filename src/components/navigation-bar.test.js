import React from 'react';
import {shallow} from 'enzyme';

import NavigationBar from './navigation-bar';

import Footer from './footer';

describe('<NavigationBar/>', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });
})
