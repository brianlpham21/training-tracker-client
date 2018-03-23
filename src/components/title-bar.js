import React from 'react';
import {Link} from 'react-router-dom';

import './title-bar.css';

export default function TitleBar() {
  return (
    <div className='title-bar'>
      <Link to='/'><button className='back-button'>back</button></Link>
      <Link to='/' className='title-bar-link-component'><h2 className='title-bar-title'>Training Tracker</h2></Link>
    </div>
  )
}
