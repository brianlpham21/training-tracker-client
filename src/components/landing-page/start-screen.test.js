import React from 'react';
import {shallow} from 'enzyme';

import StartScreen from './start-screen';

describe('<StartScreen/>', () => {
  it('Renders without crashing', () => {
    shallow(<StartScreen />);
  });

  it('Renders the container class', () => {
    const wrapper = shallow(<StartScreen />);
    expect(wrapper.hasClass('start-screen')).toEqual(true);
  });
})
