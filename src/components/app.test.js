import React from 'react';
import {shallow} from 'enzyme';

import App from './app';

import Footer from './footer';

describe('<App/>', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });
})
