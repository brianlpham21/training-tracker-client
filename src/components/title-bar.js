import React from 'react';
import {Link} from 'react-router-dom';

import './title-bar.css';

export default function TitleBar() {
  return (
    <div className='title-bar'>
      <Link to='/'><img src='https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png' className='home-icon'/></Link>
      <h2>Training Tracker</h2>
    </div>
  )
}
