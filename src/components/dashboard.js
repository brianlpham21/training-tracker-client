import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import AddWorkout from './add-workout';
import MiniWorkoutLog from './mini-workout-log';

import {Link} from 'react-router-dom';

import './dashboard.css';

export class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <p className='start-text'><span className='start-title'>Start Here:</span> This is your dashboard. From here you can start a new workout, catch a glimpse of your most recent workouts, or view your complete workout log history. To start a new workout, simply enter a workout name into the input bar and click the 'Start Workout' button. You can also go ahead and edit or delete workouts from this page or the complete workout log page.</p>
        <AddWorkout />
        <div className='workout-log-button-component'><Link to='/dashboard/workoutlog'><button className='workout-log-button'>Workout Log</button></Link></div>
        <hr className='dashboard-horizontal-line' />
        <MiniWorkoutLog />
      </div>
    );
  }
}

export default requiresLogin()(connect()(Dashboard));
