import React from 'react';
import {shallow} from 'enzyme';

import {MiniWorkoutLog} from './mini-workout-log';

import Footer from './footer';

describe('<MiniWorkoutLog/>', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });
})
