import React from 'react';
import {shallow} from 'enzyme';

import Dashboard from './dashboard';

import Footer from './footer';

describe('<Dashboard/>', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });
})
