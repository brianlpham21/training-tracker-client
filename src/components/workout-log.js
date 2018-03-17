import React, { Component } from 'react';

import Workout from './workout';

import './workout-log.css';

class WorkoutLog extends Component {
  render() {
    return (
      <div className='workout-log'>
        <h2>Routine Name</h2>
        <p>These are a list of the workouts!</p>
        <Workout />
        <Workout />
        <Workout />
      </div>
    );
  }
}

export default WorkoutLog;
