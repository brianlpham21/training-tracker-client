import React from 'react';

import InformationMain from './information-main';
import InstructionsMain from './instructions-main';
import AboutMain from './about-main';

export default function MainContent() {
  return (
    <div>
      <InformationMain />
      <InstructionsMain />
      <AboutMain />
    </div>
  )
}
