import React from 'react';
import {shallow} from 'enzyme';

import {HowPage} from './how-page';

describe('<HowPage/>', () => {
  it('Renders without crashing', () => {
    shallow(<HowPage />);
  });
})
