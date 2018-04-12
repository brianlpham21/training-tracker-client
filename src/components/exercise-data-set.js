import React, { Component } from 'react';

import './exercise-data-set.css';

export class ExerciseDataSet extends Component {
  render() {
    return (
      <tr className='exercise-data' id={this.props._id}>
        <td>{this.props.setNumber + 1}</td>
        <td>{this.props.weight}</td>
        <td>{this.props.repetitions}</td>
        <td>{this.props.set_button}</td>
      </tr>
    );
  }
}

export default ExerciseDataSet;
