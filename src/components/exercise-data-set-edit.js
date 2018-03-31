import React, { Component } from 'react';

import './exercise-data-set.css';

class ExerciseDataSetEdit extends Component {
  render() {
    return (
      <tr className='exercise-data' id={this.props._id}>
        <td>{this.props.setNumber + 1}</td>
        <td>
          <form className='edit-set-weight'>
            <input type='text' id='edit-set-weight' placeholder='Set Weight' defaultValue={this.props.weight} size='30' onBlur={(event) => console.log(event)} />
          </form>
        </td>
        <td>
          <form className='edit-set-repetitions'>
            <input type='text' id='edit-set-repetitions' placeholder='Set Repetitions' defaultValue={this.props.repetitions} size='30' onBlur={(event) => console.log(event)} />
          </form>
        </td>
        <td>{this.props.set_button}</td>
      </tr>
    );
  }
}

export default ExerciseDataSetEdit;
