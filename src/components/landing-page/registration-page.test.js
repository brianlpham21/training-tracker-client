import React from 'react';
import {shallow} from 'enzyme';

import RegistrationPage from './registration-page';

import Footer from '../footer';

describe('<RegistrationPage/>', () => {
  it('Renders without crashing', () => {
    shallow(<Footer />);
  });
})
