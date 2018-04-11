import React from 'react';
import {shallow} from 'enzyme';

import Input from './input';

import StartScreen from './start-screen'

describe('<Input/>', () => {
  it('Renders without crashing', () => {
    shallow(<StartScreen />);
  });
})
