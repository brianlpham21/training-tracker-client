import React, { Component } from 'react';

import Workout from './workout';

class MiniWorkoutLog extends Component {
  render() {
    return (
      <div>
        <h2>Routine Name</h2>
        <p>These are a list of recent workouts!</p>
        <Workout />
      </div>
    );
  }
}

export default MiniWorkoutLog;
