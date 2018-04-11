import React from 'react';
import {shallow} from 'enzyme';

import AboutPage from './about-page';
import TitleBar from './title-bar';

describe('<AboutPage/>', () => {
  it('Renders without crashing', () => {
    shallow(<AboutPage />);
  });

  it('Renders title bar without crashing', () => {
    shallow(<TitleBar />);
  });
})
