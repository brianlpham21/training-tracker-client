import React from 'react';

import './instructions-main.css'

import ruler_pencil from '../../images/ruler-pencil.gif';

export default function InstructionsMain() {
  return (
    <div className='main-instructions-container'>
      <div className='main-instructions'>
        <img
          src={ruler_pencil}
          alt='instruction-icon'
          className='instruction-icon'
        />
        <h2>Customizable Lifting Workouts</h2>
        <p>The user interface for the Training Tracker application allows for the creation of customizable workouts; the tracker supports workouts and exercises with custom names and the input of sets & repetitions completed for each exercise at a given weight.</p>
      </div>
    </div>
  )
}
