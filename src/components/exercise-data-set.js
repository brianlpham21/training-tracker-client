import React, { Component } from 'react';

class ExerciseDataSet extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.setNumber + 1}</td>
        <td>{this.props.weight}</td>
        <td>{this.props.repetitions}</td>
      </tr>
    );
  }
}

export default ExerciseDataSet;
