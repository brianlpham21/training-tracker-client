import React from 'react';
import {shallow} from 'enzyme';

import AboutPage from './about-page';
import TitleBar from './title-bar';

describe('<AboutPage/>', () => {
  it('Renders without crashing', () => {
    shallow(<AboutPage />);
  });

  it('Renders the about class', () => {
    const wrapper = shallow(<AboutPage />);
    expect(wrapper.hasClass('about')).toEqual(true);
  });
})
