import React from 'react';
import {shallow} from 'enzyme';

import NavigationBar from './navigation-bar';

describe('<NavigationBar/>', () => {
  it('Renders without crashing', () => {
    shallow(<NavigationBar />);
  });
})
