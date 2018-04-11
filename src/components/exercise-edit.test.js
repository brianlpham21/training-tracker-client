import React from 'react';
import {shallow} from 'enzyme';

import ExerciseEdit from './exercise-edit';

import Footer from './footer';

describe('<ExerciseEdit/>', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });
})
