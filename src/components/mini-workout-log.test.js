import React from 'react';
import {shallow} from 'enzyme';

import MiniWorkoutLog from './mini-workout-log';

describe('<MiniWorkoutLog/>', () => {
  it('Renders without crashing', () => {
    shallow(<MiniWorkoutLog />);
  });
})
