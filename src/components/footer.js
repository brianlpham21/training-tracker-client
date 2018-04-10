import React from 'react';

import './footer.css';

import facebook from '../images/facebook-image.png'
import instagram from '../images/instagram-image.gif'
import twitter from '../images/twitter-image.svg'
import email from '../images/email-image.png'

export default function Footer() {
  return (
    <div className='footer'>
      <ul className='social-media-icons'>
        <li>
          <a
            href='http://www.facebook.com'
            target='_blank'
            rel="noopener noreferrer"
          >
            <img
              src={facebook}
              alt='facebook-icon'
              className='social-media-icon'
            />
          </a>
        </li>
        <li>
          <a
            href='http://www.instagram.com'
            target='_blank'
            rel="noopener noreferrer"
          >
            <img
              src={instagram}
              alt='instagram-icon'
              className='social-media-icon'
            />
          </a>
        </li>
        <li>
          <a
            href='http://www.twitter.com'
            target='_blank'
            rel="noopener noreferrer"
          >
            <img
              src={twitter}
              alt='twitter-icon'
              className='social-media-icon'
            />
          </a>
        </li>
        <li>
          <a href=''>
            <img
              src={email}
              alt='email-icon'
              className='social-media-icon'
            />
          </a>
        </li>
        <h5>&copy; Copyright 2018 | Training Tracker</h5>
      </ul>
    </div>
  )
}
