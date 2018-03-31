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
        <AddWorkout />
        <MiniWorkoutLog />
        <Link to='/dashboard/workoutlog'><button className='workout-log-button'>Workout Log</button></Link>
      </div>
    );
  }
}

export default requiresLogin()(connect()(Dashboard));
