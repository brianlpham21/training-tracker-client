import React from 'react';
import {shallow} from 'enzyme';

import AboutPage from './about-page';

describe('<AboutPage/>', () => {
  it('Renders without crashing', () => {
    shallow(<AboutPage />);
  });
})
