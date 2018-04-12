import React from 'react';
import {shallow} from 'enzyme';

import {WorkoutInstructions} from './workout-instructions';

describe('<WorkoutInstructions/>', () => {
  it('Renders without crashing', () => {
    shallow(<WorkoutInstructions />);
  });
})
