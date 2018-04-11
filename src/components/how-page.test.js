import React from 'react';
import {shallow} from 'enzyme';

import HowPage from './how-page';

import Footer from './footer';

describe('<HowPage/>', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });
})
