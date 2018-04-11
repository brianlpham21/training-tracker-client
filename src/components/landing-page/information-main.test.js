import React from 'react';
import {shallow} from 'enzyme';

import InformationMain from './information-main';

describe('<InformationMain/>', () => {
  it('Renders without crashing', () => {
    shallow(<InformationMain />);
  });
})
