import React, { Component } from 'react';

import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import Workout from './workout';

import './workout-log.css';

class WorkoutLog extends Component {
  render() {
    return (
      <div className='workout-log'>
        <h3>Workouts</h3>
        <Workout />
        <Workout />
        <Workout />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(WorkoutLog));
