import React, { Component } from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchSelectWorkoutData} from '../actions/workouts';
import {editWorkout} from '../actions/workouts';
import {addExercise} from '../actions/exercises';
import {addSet} from '../actions/sets';
import {deleteExercise} from '../actions/exercises';
import {deleteSet} from '../actions/sets';

import Exercise from './exercise';

import {Link} from 'react-router-dom';

import './edit-workout.css';

class EditWorkout extends Component {

  componentDidMount() {
    this.props.dispatch(fetchSelectWorkoutData(window.location.pathname.split('/')[2]));
  }

  onEditWorkout(event) {
    this.props.dispatch(editWorkout(window.location.pathname.split('/')[2], event.target.value))
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
      this.props.dispatch(deleteExercise(window.location.pathname.split('/')[2], event.target.parentElement.parentElement.nextSibling.id))
        .then(data => window.location.reload());
    }
  }

  onDeleteSet(event) {
    event.preventDefault();

    const result = window.confirm('Are you sure?')
    if (result) {
      this.props.dispatch(deleteSet(window.location.pathname.split('/')[2], event.target.parentElement.parentElement.parentElement.parentElement.parentElement.previousSibling.parentElement.nextSibling.id, event.target.parentElement.parentElement.parentElement.id))
        .then(data => window.location.reload());
    }
  }

  render() {
    let exercises = '';

    const delete_button = <button className='delete-exercise-button' onClick= {(event) => this.onDeleteExercise(event)}><img src='https://png.icons8.com/metro/1600/delete.png' alt='delete-icon' className='delete-exercise-icon' /></button>;

    const set_delete_button = <button className='delete-set-button' onClick= {(event) => this.onDeleteSet(event)}><img src='https://png.icons8.com/metro/1600/delete.png' alt='delete-icon' className='delete-set-icon' /></button>;

    if (this.props.select_workout_data) {
      if(this.props.select_workout_data.exercises) {
        exercises = this.props.select_workout_data.exercises.map((exercises, index) => {
          return (
            <div key={index}>
              <Exercise {...exercises} button={delete_button} set_button={set_delete_button} />
              <form className='add-set-form' id={exercises._id} onSubmit= {(event) => this.onAddSet(event)}>
                <input type='number' name='setWeight' placeholder='Set Weight...' />
                <input type='number' name='setRepetitions' placeholder='Set Repetitions...' />
                <button type='submit' className='add-set-button'><img src='https://d30y9cdsu7xlg0.cloudfront.net/png/74327-200.png' alt='add-icon' className='add-set-icon' /></button>
              </form>
            </div>
          )
        })
      }
    }

    return (
      <div className='edit-section'>
        <form className='edit-workout-name'>
          <input type='text' id='edit-workout-name' placeholder='Workout Name' value={this.props.select_workout_data.name} size='30' onChange onBlur={(event) => this.onEditWorkout(event)} />
        </form>

        <div>{exercises}</div>
        <hr />
        <form className='add-exercise-form' onSubmit={(event) => this.onAddExercise(event)}>
          <input type='text' name='exerciseName' placeholder='Exercise Name...' />
          <button type='submit' className='add-exercise-button'><img src='https://d30y9cdsu7xlg0.cloudfront.net/png/74327-200.png' alt='add-icon' className='add-exercise-icon' /></button>
        </form>
        <Link to='/dashboard'><button className='edit-done-button'>Done</button></Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    select_workout_data: state.workouts.selectWorkoutData,
  };
};

export default requiresLogin()(connect(mapStateToProps)(EditWorkout));
