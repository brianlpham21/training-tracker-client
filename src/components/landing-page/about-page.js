import React, {Component} from 'react';

import TitleBar from './title-bar';

import './about-page.css';

class About extends Component {
  render() {
    return (
      <div className='about'>
        <TitleBar />
        <div className='image-container'>
          <img
            src='https://d30y9cdsu7xlg0.cloudfront.net/png/118696-200.png'
            alt='about-logo'
            className='about-logo'
          />
        </div>
        <div className='about-text'>
          <p>The Training Tracker is a web application that was developed in early 2018 with the purpose of creating a platform for users to easily and effectively track their fitness goals and workouts.</p>
          <p>The idea behind the application sits on the driving forces that aid in the motivation and discipline required to make significant progress in the weight room. In everything that we do, progress is key and it typically helps in keeping us motivated and continuing to drive further in meeting and building on our set goals.</p>
          <p>The Training Tracker takes all the stress and inconvenience out of setting and tracking your goals, and places them in an easy and accessible location. Being able to easily customize your workouts, as well as see your progression through past workouts at a press of a button, allows you to focus on what should be most important, your workout.</p>
        </div>
      </div>
    );
  }
}

export default About;
