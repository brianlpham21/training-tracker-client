import React from 'react';
import {shallow} from 'enzyme';

import RequiresLogin from './requires-login';

import Footer from './footer';

describe('<RequiresLogin/>', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });
})
