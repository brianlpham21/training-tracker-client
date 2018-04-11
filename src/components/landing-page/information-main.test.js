import React from 'react';
import {shallow} from 'enzyme';

import InformationMain from './information-main';

describe('<InformationMain/>', () => {
  it('Renders without crashing', () => {
    shallow(<InformationMain />);
  });

  it('Renders the information class', () => {
    const wrapper = shallow(<InformationMain />);
    expect(wrapper.hasClass('main-information')).toEqual(true);
  });
})
