import React, { Component } from 'react';

import ExerciseDataSet from './exercise-data-set';

class Exercise extends Component {
  render() {
    const sets = this.props.sets.map((set, index) => {
      return <ExerciseDataSet key={index} {...set}/>
    })

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
}

export default Exercise;
