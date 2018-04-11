import React from 'react';
import {shallow} from 'enzyme';

import InstructionsMain from './instructions-main';

describe('<InstructionsMain/>', () => {
  it('Renders without crashing', () => {
    shallow(<InstructionsMain />);
  });
})
