import React from 'react';
import {shallow} from 'enzyme';

import LandingPage from './landing-page';

import Footer from '../footer';

describe('<LandingPage/>', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });
})
