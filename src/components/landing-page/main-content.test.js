import React from 'react';
import {shallow} from 'enzyme';

import MainContent from './main-content';

describe('<MainContent/>', () => {
  it('Renders without crashing', () => {
    shallow(<MainContent />);
  });
})
