import React from 'react';
import {shallow} from 'enzyme';

import EditWorkout from './edit-workout';

describe('<EditWorkout/>', () => {
  it('Renders without crashing', () => {
    shallow(<EditWorkout />);
  });
})
