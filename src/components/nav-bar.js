import React from 'react';
import {Link} from 'react-router-dom';

import './nav-bar.css';

export default function NavBar() {
  return (
    <div className='nav-bar'>
      <div className='container'>
        <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/118696-200.png' className='main-logo'/>
        <h2>Training Tracker</h2>
        <p>track your fitness goals and progress</p>
        <ul>
          <li>
            <Link to='/register'><button className='register-button'>Register</button></Link>
          </li>
          <li>
            <Link to='/login'><button className='login-button'>Log In</button></Link>
          </li>
        </ul>
        <img src='https://www.materialui.co/materialIcons/navigation/arrow_drop_down_white_192x192.png' className='arrow-down' />
      </div>
    </div>
  )
}
