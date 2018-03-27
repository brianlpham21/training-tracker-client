import React, { Component } from 'react';

class ExerciseDataSet extends Component {
  render() {
    console.log(this.props);

    return (
      <tr>
        <td>1</td>
        <td>{this.props.weight}</td>
        <td>{this.props.repetitions}</td>
      </tr>
    );
  }
}

export default ExerciseDataSet;
