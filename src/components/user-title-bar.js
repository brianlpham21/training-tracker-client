import React from 'react';
import {Link} from 'react-router-dom';

import './user-title-bar.css';

export default function UserTitleBar() {
  return (
    <div className='user-title-bar'>
      <Link to='/'><img src='https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png' alt='home-icon' className='home-icon'/></Link>
      <h2>Training Tracker</h2>
    </div>
  )
}
