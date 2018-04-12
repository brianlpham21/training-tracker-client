import React from 'react';
import {shallow} from 'enzyme';

import {ExerciseDataSetEdit} from './exercise-data-set-edit';

describe('<ExerciseDataSetEdit/>', () => {
  it('Renders without crashing', () => {
    shallow(<ExerciseDataSetEdit />);
  });
})
