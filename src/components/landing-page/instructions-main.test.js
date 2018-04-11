import React from 'react';
import {shallow} from 'enzyme';

import InstructionsMain from './instructions-main';

describe('<InstructionsMain/>', () => {
  it('Renders without crashing', () => {
    shallow(<InstructionsMain />);
  });

  it('Renders the container class', () => {
    const wrapper = shallow(<InstructionsMain />);
    expect(wrapper.hasClass('main-instructions-container')).toEqual(true);
  });
})
