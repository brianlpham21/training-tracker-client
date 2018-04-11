import React from 'react';
import {shallow} from 'enzyme';

import AddWorkout from './add-workout';

import Footer from './footer';

describe('<AddWorkout/>', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });
})
