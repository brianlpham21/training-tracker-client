import React from 'react';
import {shallow} from 'enzyme';

import AboutMain from './about-main';

describe('<AboutMain/>', () => {
  it('Renders without crashing', () => {
    shallow(<AboutMain />);
  });
})
