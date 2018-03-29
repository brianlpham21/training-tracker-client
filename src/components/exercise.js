import React, { Component } from 'react';

import ExerciseDataSet from './exercise-data-set';

import './exercise.css';

class Exercise extends Component {
  render() {
    const sets = this.props.sets.map((set, index) => {
      return <ExerciseDataSet key={index} setNumber={index} {...set}/>
    });

    if (sets.length > 0) {
      return (
        <div className='indvidual-exercise'>
          <h4 className='indvidual-exercise-title'>Exercise: {this.props.name}</h4>
          <table>
            <thead>
              <tr className='indvidual-exercise-data-header'>
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
        <div className='indvidual-exercise'>
          <h4 className='indvidual-exercise-title'>Exercise: {this.props.name}</h4>
          <table>
            <thead>
              <tr className='indvidual-exercise-data-header'>
                <th>-</th>
                <th>-</th>
                <th>-</th>
              </tr>
            </thead>
          </table>
        </div>
      );
    }
  }
}

export default Exercise;
