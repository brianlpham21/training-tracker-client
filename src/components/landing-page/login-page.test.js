import React from 'react';
import {shallow} from 'enzyme';

import {LoginPage} from './login-page';

import Footer from '../footer';

describe('<LoginPage/>', () => {
  it('Renders without crashing', () => {
    shallow(<LoginPage />);
  });
})
