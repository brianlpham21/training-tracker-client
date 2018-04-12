import React from 'react';
import {shallow} from 'enzyme';

import {AddWorkout} from './add-workout';

describe('<AddWorkout/>', () => {
  it('Renders without crashing', () => {
    shallow(<AddWorkout />);
  });
})
