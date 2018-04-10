import React from 'react';
import {Link} from 'react-router-dom';

import './start-screen.css';

export default function StartScreen() {
  return (
    <div className='start-screen'>
      <div className='container'>
        <img
          src='https://d30y9cdsu7xlg0.cloudfront.net/png/118696-200.png'
          alt='main-logo'
          className='main-logo'
        />
        <h2 className='title'>Training Tracker</h2>
        <p className='title-description'>Set and Track Your Fitness Goals</p>
        <ul>
          <li>
            <Link to='/register'>
              <button className='register-button'>Register</button>
            </Link>
          </li>
          <li>
            <Link to='/login'>
              <button className='login-button'>Log In</button>
            </Link>
          </li>
        </ul>
        <img
          src='https://www.materialui.co/materialIcons/navigation/arrow_drop_down_white_192x192.png'
          alt='arrow-down'
          className='arrow-down'
        />
      </div>
    </div>
  )
}
