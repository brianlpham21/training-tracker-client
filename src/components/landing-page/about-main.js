import React from 'react';
import {Link} from 'react-router-dom';

import './about-main.css';

export default function AboutMain() {
  return (
    <div className='main-about-container'>
      <div className='main-about'>
        <Link to='/about' className='main-about-link-component'>
          <button className='about-button'>
            <h2 className='main-about-link'>About Training Tracker</h2>
          </button>
        </Link>
        <p>The Training Tracker application makes it easier for users looking to track their fitness progress.</p>
      </div>
    </div>
  )
}
