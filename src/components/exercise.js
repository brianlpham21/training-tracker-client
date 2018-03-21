import React, { Component } from 'react';

import ExerciseDataSet from './exercise-data-set';
import ExerciseDataWeight from './exercise-data-weight';
import ExerciseDataRepetitions from './exercise-data-repetitions';

class Exercise extends Component {
  render() {
    return (
      <div>
        <h5>Exercise: </h5>
        <table>
          <thead>
            <tr>
              <th>Set</th>
              <th>Weight</th>
              <th>Repetitions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <ExerciseDataSet />
              <ExerciseDataWeight />
              <ExerciseDataRepetitions />
            </tr>
            <tr>
              <ExerciseDataSet />
              <ExerciseDataWeight />
              <ExerciseDataRepetitions />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Exercise;
