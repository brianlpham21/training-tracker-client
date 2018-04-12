import React from 'react';
import {shallow} from 'enzyme';

import {Workout} from './workout';

import Footer from './footer';

describe('<Workout/>', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });
})
