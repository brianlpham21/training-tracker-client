import React, { Component } from 'react';

import ExerciseDataSet from './exercise-data-set';

class Exercise extends Component {
  render() {
    const sets = this.props.sets.map((set, index) => {
      return <ExerciseDataSet key={index} setNumber={index} {...set}/>
    });

    if (sets.length > 0) {
      return (
        <div>
          <h5>Exercise: {this.props.name}</h5>
          <table>
            <thead>
              <tr>
                <th>Set</th>
                <th>Weight</th>
                <th>Repetitions</th>
              </tr>
            </thead>
            <tbody>
              {sets}
            </tbody>
          </table>
        </div>
      );
    }
    else {
      return (
        <div>
          <h5>Exercise: {this.props.name}</h5>
        </div>
      );
    }
  }
}

export default Exercise;
