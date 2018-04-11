import React from 'react';
import {shallow} from 'enzyme';

import ExerciseDataSetEdit from './exercise-data-set-edit';

import Footer from './footer';

describe('<ExerciseDataSetEdit/>', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });
})
