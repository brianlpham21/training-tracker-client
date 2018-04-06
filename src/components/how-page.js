import React, { Component } from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import './how-page.css';

class HowPage extends Component {
  render() {
    return (
      <div className='how-page'>
        <div className='logo-how-page-container'>
          <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/118696-200.png' alt='logo' className='logo-how-page' />
        </div>
        <div className='how-page-text'>
          <p>The Training Tracker application allows users to effectively track their own fitness goals through a easy-to-understand and user-friendly user interface.</p>
          <p>To get started, check out your user dashboard by clicking on the 'Home' button in the navigation bar.
          From here, you can start a new workout, catch a glimpse of your most recent workouts, or view your complete workout log history. You can also edit or delete any of your recent workouts from this page as well.</p>
          <p>Moving to your personal workout log through the 'Workout Log' button in the navigation bar, you will be able to edit and delete the rest of your past workouts. You can go ahead and edit the contents of each workout using the 'Edit' button or delete a workout in its entirety using the 'Delete' button.</p>
          <p>There are essentially three key actions available to you when editing a select workout: updating, adding, or deleting. To update the workout name, an exercise name, or the set amounts for the weight and repetitions, you can go ahead and manually change them in the inputs provided.</p>
          <p>To add sets or exercises to your workout, you can use the + icons provided with the appropriate labels. And to delete a set or exercise from your workout, selecting the trash can icon provided will remove that element from your workout.</p>
          <p>That pretty much sums up the current features available for the Training Tracker. If you have suggestions or concerns, feel free to contact us at brianlpham21@gmail.com.</p>
        </div>
      </div>
    );
  }
}

export default requiresLogin()(connect()(HowPage));
