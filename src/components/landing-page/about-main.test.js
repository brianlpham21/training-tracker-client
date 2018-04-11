import React from 'react';
import {shallow} from 'enzyme';

import AboutMain from './about-main';

describe('<AboutMain/>', () => {
  it('Renders without crashing', () => {
    shallow(<AboutMain />);
  });

  it('Renders the container class', () => {
    const wrapper = shallow(<AboutMain />);
    expect(wrapper.hasClass('main-about-container')).toEqual(true);
  });
})
