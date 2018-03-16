import React from 'react';

import './footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <ul className='social-media-icons'>
        <li><a href='#'><img src='http://www.danielas.com.au/www/1015/files/facebook-5-xxl.png' className='social-media-icon' /></a></li>
        <li><a href='#'><img src='https://static1.squarespace.com/static/54b83998e4b0a17414b429a9/54d2ccbfe4b08b02e24f050a/54d2ccbfe4b0526a666a23d5/1470421919330/Instagram+Icon.gif' className='social-media-icon' /></a></li>
        <li><a href='#'><img src='https://image.flaticon.com/icons/svg/56/56729.svg' className='social-media-icon' /></a></li>
        <li><a href='#'><img src='http://concept4u.com/wp-content/uploads/2005/12/email-icon-transparent-background.png' className='social-media-icon' /></a></li>
        <h5>&copy; Copyright 2018 Training Tracker</h5>
      </ul>
    </div>
  )
}
