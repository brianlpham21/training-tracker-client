import React from 'react';
import {shallow} from 'enzyme';

import ExerciseEdit from './exercise-edit';

describe('<ExerciseEdit/>', () => {
  it('Renders without crashing', () => {
    shallow(<ExerciseEdit />);
  });
})
