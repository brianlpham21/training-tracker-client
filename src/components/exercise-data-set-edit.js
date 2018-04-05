import React, { Component } from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import {editSetWeight} from '../actions/sets';
import {editSetRepetitions} from '../actions/sets';

import './exercise-data-set-edit.css';

class ExerciseDataSetEdit extends Component {
  onEditSetWeight(event) {
    this.props.dispatch(editSetWeight(this.props.select_workout_data.workout_id, event.target.parentElement.parentElement.parentElement.parentElement.parentElement.previousSibling.previousSibling.firstChild.nextSibling.className, event.target.parentElement.parentElement.parentElement.id, event.target.value, this.props.setNumber))
  }

  onEditSetRepetitions(event) {
    this.props.dispatch(editSetRepetitions(this.props.select_workout_data.workout_id, event.target.parentElement.parentElement.parentElement.parentElement.parentElement.previousSibling.previousSibling.firstChild.nextSibling.className, event.target.parentElement.parentElement.parentElement.id, event.target.value, this.props.setNumber))
  }

  render() {
    return (
      <tr className='exercise-data-edit' id={this.props._id}>
        <td>{this.props.setNumber + 1}</td>
        <td>
          <form className='edit-set-weight'>
            <input type='text' id='edit-set-weight' data-set='1' placeholder='Set Weight' defaultValue={this.props.weight} size='30' onBlur={(event) => this.onEditSetWeight(event)} />
          </form>
        </td>
        <td>
          <form className='edit-set-repetitions'>
            <input type='text' id='edit-set-repetitions' placeholder='Set Repetitions' defaultValue={this.props.repetitions} size='30' onBlur={(event) => this.onEditSetRepetitions(event)} />
          </form>
        </td>
        <td>{this.props.set_button}</td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
    select_workout_data: state.workouts.selectWorkoutData,
  };
};

export default requiresLogin()(connect(mapStateToProps)(ExerciseDataSetEdit));
