import React, { Component } from 'react';

import Workout from './workout';
import Footer from './footer';

class WorkoutLog extends Component {
  render() {
    return (
      <div>
        <h2>Routine Name</h2>
        <p>These are a list of the workouts!</p>
        <Workout />
        <Workout />
        <Workout />
        <Footer />
      </div>
    );
  }
}

export default WorkoutLog;
