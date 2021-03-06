import React from 'react';

import './information-main.css';

import heart_image from '../../images/heart-image.png';

export default function InformationMain() {
  return (
    <div className='main-information'>
      <img
        src={heart_image}
        alt='main-information-icon'
        className='main-information-icon'
      />
      <h2 className='main-information-header'>Get Started With Your Fitness Goals</h2>
      <p>Motivation and discipline, two very important driving forces behind our workouts, can often begin to dwindle when projected goals and objectives are not consistently tracked.</p>
      <p>The Training Tracker application allows users to effectively track their own fitness goals through a easy-to-understand and user-friendly user interface.</p>
    </div>
  )
}
