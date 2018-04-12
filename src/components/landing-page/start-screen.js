import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../images/logo.png';
import arrow from '../../images/arrow.png';

import './start-screen.css';

export default function StartScreen() {
  return (
    <div className='start-screen'>
      <div className='container'>
        <img
          src={logo}
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
          src={arrow}
          alt='arrow-down'
          className='arrow-down'
        />
      </div>
    </div>
  )
}
