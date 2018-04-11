import React from 'react';
import {shallow} from 'enzyme';

import Exercise from './exercise';

describe('<Exercise/>', () => {
  it('Renders without crashing', () => {
    shallow(<Exercise />);
  });
})
