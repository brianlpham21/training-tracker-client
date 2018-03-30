import React, { Component } from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchSelectWorkoutData} from '../actions/protected-data';
import {addExercise} from '../actions/protected-data';
import {addSet} from '../actions/protected-data';
import {deleteExercise} from '../actions/protected-data';
import {deleteSet} from '../actions/protected-data';

import Exercise from './exercise';

import {Link} from 'react-router-dom';

import './edit-workout.css';

class EditWorkout extends Component {
  componentDidMount() {
    this.props.dispatch(fetchSelectWorkoutData(window.location.pathname.split('/')[2]));
  }

  onAddExercise(event) {
    event.preventDefault();

    if (event.target.exerciseName.value) {
      this.props.dispatch(addExercise(window.location.pathname.split('/')[2], event.target.exerciseName.value))
        .then(data => window.location.reload());
    }
  }

  onAddSet(event) {
    event.preventDefault();

    if (event.target.setWeight.value || event.target.setRepetitions.value) {
      this.props.dispatch(addSet(window.location.pathname.split('/')[2], event.target.id, event.target.setWeight.value, event.target.setRepetitions.value))
        .then(data => window.location.reload());
    }
  }

  onDeleteExercise(event) {
    event.preventDefault();

    const result = window.confirm('Are you sure?')
    if (result) {
      this.props.dispatch(deleteExercise(window.location.pathname.split('/')[2], event.target.parentElement.nextSibling.id))
        .then(data => window.location.reload());
    }
  }

  onDeleteSet(event) {
    event.preventDefault();

    const result = window.confirm('Are you sure?')
    if (result) {
      this.props.dispatch(deleteSet(window.location.pathname.split('/')[2], event.target.parentElement.parentElement.parentElement.parentElement.previousSibling.parentElement.nextSibling.id, event.target.parentElement.parentElement.id))
        .then(data => window.location.reload());
    }
  }

  editWorkoutName(event) {
    event.preventDefault();

    const workoutInput = document.getElementsByClassName('workout-name')[0];

    workoutInput.outerHTML = `
      <form class='edit-workout-name'>
        <input type='text' id='edit-workout-name' placeholder='Workout Name' value='${workoutInput.innerHTML}' size='50' autofocus>
        <button type='submit' class='edit-workout-name-form-submit'>Submit</button>
        <button class='edit-workout-name-form-cancel'>Cancel</button>
      </form>
    `;

    let editWorkoutNameButton = document.getElementsByClassName('edit-workout-name-button')[0];
    editWorkoutNameButton.style.display = 'none';
  }



  render() {

    let exercises = '';

    let delete_button = <button className='delete-exercise-button' onClick= {(event) => this.onDeleteExercise(event)}>Delete Exercise</button>;

    let set_delete_button = <button className='delete-set-button' onClick= {(event) => this.onDeleteSet(event)}>Delete Set</button>;

    if (this.props.select_workout_data) {
      if(this.props.select_workout_data.exercises) {
        exercises = this.props.select_workout_data.exercises.map((exercises, index) => {
          return (
            <div key={index}>
              <Exercise {...exercises} button={delete_button} set_button={set_delete_button} />
              <form className='add-set-form' id={exercises._id} onSubmit= {(event) => this.onAddSet(event)}>
                <input type='number' name='setWeight' placeholder='Set Weight...' />
                <input type='number' name='setRepetitions' placeholder='Set Repetitions...' />
                <button type='submit' className='add-set-button'>Add Set</button>
              </form>
            </div>
          )
        })
      }
    }

    return (
      <div className='edit-section'>
        <h3 className='workout-name'>{this.props.select_workout_data.name}</h3>
        <button className='edit-workout-name-button' onClick= {(event) => this.editWorkoutName(event)}>Edit Workout Name</button>
        <div>{exercises}</div>
        <hr />
        <form className='add-exercise-form' onSubmit= {(event) => this.onAddExercise(event)}>
          <input type='text' name='exerciseName' placeholder='Exercise Name...' />
          <button type='submit' className='add-exercise-button'>Add Exercise</button>
        </form>
        <Link to='/dashboard'><button className='edit-done-button'>Done</button></Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    select_workout_data: state.protectedData.selectWorkoutData,
  };
};

export default requiresLogin()(connect(mapStateToProps)(EditWorkout));
