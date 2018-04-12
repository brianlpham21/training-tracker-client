import React from 'react';
import {shallow} from 'enzyme';

import TitleBar from './title-bar';

describe('<TitleBar/>', () => {
  it('Renders without crashing', () => {
    shallow(<TitleBar />);
  });

  it('Renders the container class', () => {
    const wrapper = shallow(<TitleBar />);
    expect(wrapper.hasClass('title-bar')).toEqual(true);
  });
})
