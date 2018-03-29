import React, { Component } from 'react';

import './exercise-data-set.css';

class ExerciseDataSet extends Component {
  render() {
    return (
      <tr className='exercise-data'>
        <td>{this.props.setNumber + 1}</td>
        <td>{this.props.weight}</td>
        <td>{this.props.repetitions}</td>
      </tr>
    );
  }
}

export default ExerciseDataSet;
