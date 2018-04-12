import React, { Component } from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import {editExercise, deleteExercise} from '../actions/exercises';

import ExerciseDataSetEdit from './exercise-data-set-edit';

import './exercise-edit.css';

export class ExerciseEdit extends Component {
  onEditExercise(workout_id, id, event) {
    event.preventDefault();
    this.props.dispatch(editExercise(workout_id, id, event.target.value))
  }

  onDeleteExercise(workout_id, id, event) {
    event.preventDefault();

    const result = window.confirm('Are you sure?')
    if (result) {
      this.props.dispatch(deleteExercise(workout_id, id))
        .then(data => window.location.reload());
    }
  }

  render() {
    const sets = this.props.sets.map((set, index) => {
      return <ExerciseDataSetEdit key={index} setNumber={index} {...set} id={this.props.id} exercise_id={this.props._id} />
    });

    if (sets.length > 0) {
      return (
        <div className='individual-exercise-edit'>
          <form className='edit-exercise-name'>
            <label htmlFor='edit-exercise-name'>Exercise Name:</label>
            <input
              type='text'
              id='edit-exercise-name'
              placeholder='Exercise Name'
              defaultValue={this.props.name}
              size='30'
              onBlur={(event) => this.onEditExercise(this.props.id, this.props._id, event)}
            />
          </form>
          <button
            className='delete-exercise-button'
            onClick= {(event) => this.onDeleteExercise(this.props.id, this.props._id, event)}
          >
            <img
              src='https://png.icons8.com/metro/1600/delete.png'
              alt='delete-icon'
              className='delete-exercise-icon'
            />
          </button>
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
        <div className='individual-exercise-edit'>
          <form className='edit-exercise-name'>
            <label htmlFor='edit-exercise-name'>Exercise Name:</label>
            <input
              type='text'
              id='edit-exercise-name'
              placeholder='Exercise Name'
              defaultValue={this.props.name}
              size='30'
              onBlur={(event) => this.onEditExercise(this.props.id, this.props._id, event)}
            />
          </form>
          <button
            className='delete-exercise-button'
            onClick= {(event) => this.onDeleteExercise(this.props.id, this.props._id, event)}
          >
            <img
              src='https://png.icons8.com/metro/1600/delete.png'
              alt='delete-icon'
              className='delete-exercise-icon'
            />
          </button>
          <table>
            <thead>
              <tr className='indvidual-exercise-data-header'>
                <th>-</th>
                <th>-</th>
                <th>-</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default requiresLogin()(connect()(ExerciseEdit));
