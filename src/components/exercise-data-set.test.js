import React from 'react';
import {shallow} from 'enzyme';

import ExerciseDataSet from './exercise-data-set';

import Footer from './footer';

describe('<ExerciseDataSet/>', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });
})
