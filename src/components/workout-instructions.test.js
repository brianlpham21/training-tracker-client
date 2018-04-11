import React from 'react';
import {shallow} from 'enzyme';

import WorkoutInstructions from './workout-instructions';

import Footer from './footer';

describe('<WorkoutInstructions/>', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });
})
