import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import AddWorkout from './add-workout';
import MiniWorkoutLog from './mini-workout-log';

import './dashboard.css';

export class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <AddWorkout />
        <MiniWorkoutLog />
      </div>
    );
  }
}

export default requiresLogin()(connect()(Dashboard));
