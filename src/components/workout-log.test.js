import React from 'react';
import {shallow} from 'enzyme';

import WorkoutLog from './workout-log';

import Footer from './footer';

describe('<WorkoutLog/>', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });
})
