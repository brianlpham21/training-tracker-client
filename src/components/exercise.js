import React, { Component } from 'react';

import ExerciseData from './exercise-data';

class Exercise extends Component {
  render() {
    return (
      <div>
        <p>This is the exercise</p>
        <ExerciseData />
      </div>
    );
  }
}

export default Exercise;
