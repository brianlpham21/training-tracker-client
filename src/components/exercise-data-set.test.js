import React from 'react';
import {shallow} from 'enzyme';

import ExerciseDataSet from './exercise-data-set';

describe('<ExerciseDataSet/>', () => {
  it('Renders without crashing', () => {
    shallow(<ExerciseDataSet />);
  });
})
