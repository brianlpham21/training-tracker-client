import React from 'react';
import {shallow} from 'enzyme';

import {Exercise} from './exercise';

import Footer from './footer';

describe('<Exercise/>', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });
})
