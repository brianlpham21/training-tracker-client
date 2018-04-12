import React from 'react';
import {shallow} from 'enzyme';

import {EditWorkout} from './edit-workout';

import Footer from './footer';

describe('<EditWorkout/>', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });
})
