import React from 'react';
import {shallow} from 'enzyme';

import TitleBar from './title-bar';

describe('<TitleBar/>', () => {
  it('Renders without crashing', () => {
    shallow(<TitleBar />);
  });
})
