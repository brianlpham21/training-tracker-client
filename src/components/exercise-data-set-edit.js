import React, { Component } from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import {editSetWeight, editSetRepetitions, deleteSet} from '../actions/sets';

import './exercise-data-set-edit.css';

export class ExerciseDataSetEdit extends Component {
  onEditSetWeight(workout_id, exercise_id, id, event) {
    this.props.dispatch(editSetWeight(workout_id, exercise_id, id, event.target.value, this.props.setNumber))
  }

  onEditSetRepetitions(workout_id, exercise_id, id, event) {
    this.props.dispatch(editSetRepetitions(workout_id, exercise_id, id, event.target.value, this.props.setNumber))
  }

  onDeleteSet(workout_id, exercise_id, id, event) {
    event.preventDefault();

    const result = window.confirm('Are you sure?')
    if (result) {
      this.props.dispatch(deleteSet(workout_id, exercise_id, id))
        .then(data => window.location.reload());
    }
  }

  render() {
    return (
      <tr className='exercise-data-edit'>
        <td>{this.props.setNumber + 1}</td>
        <td>
          <form className='edit-set-weight'>
            <input
              type='text'
              id='edit-set-weight'
              data-set='1'
              placeholder='Set Weight'
              defaultValue={this.props.weight}
              size='30'
              onBlur={(event) => this.onEditSetWeight(this.props.id, this.props.exercise_id, this.props._id, event)}
            />
          </form>
        </td>
        <td>
          <form className='edit-set-repetitions'>
            <input
              type='text'
              id='edit-set-repetitions'
              placeholder='Set Repetitions'
              defaultValue={this.props.repetitions}
              size='30'
              onBlur={(event) => this.onEditSetRepetitions(this.props.id, this.props.exercise_id, this.props._id, event)}
            />
          </form>
        </td>
        <td>
          <button
            className='delete-set-button'
            onClick= {(event) => this.onDeleteSet(this.props.id, this.props.exercise_id, this.props._id, event)}
          >
            <img
              src='https://png.icons8.com/metro/1600/delete.png'
              alt='delete-icon'
              className='delete-set-icon'
            />
          </button>
        </td>
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
