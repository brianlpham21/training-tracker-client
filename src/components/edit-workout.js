import React, { Component } from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchSelectWorkoutData} from '../actions/workouts';
import {editWorkout} from '../actions/workouts';
import {addExercise, deleteExercise} from '../actions/exercises';
import {addSet, deleteSet} from '../actions/sets';
import {clearSelectedWorkout} from '../actions/workouts';

import ExerciseEdit from './exercise-edit';

import {Link} from 'react-router-dom';

import './edit-workout.css';

class EditWorkout extends Component {
  componentDidMount() {
    this.props.dispatch(fetchSelectWorkoutData(window.location.pathname.split('/')[2]));
  }

  onEditWorkout(event) {
    event.preventDefault();

    this.props.dispatch(editWorkout(this.props.select_workout_data.workout_id, event.target.value))
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

    if (event.target.setWeight.value && !(event.target.setRepetitions.value)) {
      alert('Enter the repetitions!')
    }

    if (!(event.target.setWeight.value) && event.target.setRepetitions.value) {
      alert('Enter the weight!')
    }

    if (event.target.setWeight.value && event.target.setRepetitions.value) {
      this.props.dispatch(addSet(this.props.select_workout_data.workout_id, event.target.id, event.target.setWeight.value, event.target.setRepetitions.value))
        .then(data => window.location.reload());
    }
  }

  onDeleteExercise(event) {
    event.preventDefault();

    const result = window.confirm('Are you sure?')
    if (result) {
      this.props.dispatch(deleteExercise(this.props.select_workout_data.workout_id, event.target.parentElement.parentElement.nextSibling.id))
        .then(data => window.location.reload());
    }
  }

  onDeleteSet(event) {
    event.preventDefault();

    const result = window.confirm('Are you sure?')
    if (result) {
      this.props.dispatch(deleteSet(this.props.select_workout_data.workout_id, event.target.parentElement.parentElement.parentElement.parentElement.parentElement.previousSibling.parentElement.nextSibling.id, event.target.parentElement.parentElement.parentElement.id))
        .then(data => window.location.reload());
    }
  }

  render() {
    const delete_button = <button className='delete-exercise-button' onClick= {(event) => this.onDeleteExercise(event)}><img src='https://png.icons8.com/metro/1600/delete.png' alt='delete-icon' className='delete-exercise-icon' /></button>;

    const set_delete_button = <button className='delete-set-button' onClick= {(event) => this.onDeleteSet(event)}><img src='https://png.icons8.com/metro/1600/delete.png' alt='delete-icon' className='delete-set-icon' /></button>;

    let workoutForm = '';
    let exercises ='';

    if (this.props.select_workout_data) {
      if (this.props.select_workout_data.name) {
        workoutForm =
          <div className='edit-workout-section'>
            <label htmlFor="edit-workout-name">Workout Name:</label>
            <form className='edit-workout-name'>
              <input type='text' id='edit-workout-name' placeholder='Workout Name' defaultValue={this.props.select_workout_data.name} size='30' onBlur={(event) => this.onEditWorkout(event)} />
            </form>
          </div>
      }
    }

    if (this.props.select_workout_data) {
      if(this.props.select_workout_data.exercises) {
        exercises = this.props.select_workout_data.exercises.map((exercises, index) => {
          return (
            <div key={index}>
              <ExerciseEdit {...exercises} button={delete_button} set_button={set_delete_button} />
              <form className='add-set-form' id={exercises._id} onSubmit= {(event) => this.onAddSet(event)}>
                <input type='number' name='setWeight' placeholder='Set Weight' min='0' />
                <input type='number' name='setRepetitions' placeholder='Set Repetitions' min='0' />
                <button type='submit' className='add-set-button'><img src='https://d30y9cdsu7xlg0.cloudfront.net/png/74327-200.png' alt='add-icon' className='add-set-icon' /></button>
              </form>
            </div>
          )
        })
      }
    }

    return (
      <div className='edit-section-container'>
        <div className='edit-instruction-section'>
          <h1 className='instructions-text-header'>Edit Your Workout</h1>
          <p className='instructions-text'><span className='instructions-title'>Instructions: </span>There are essentially three key actions available to you when editing a select workout: updating, adding, or deleting. To update the workout name, an exercise name, or the set amounts for the weight and repetitions, you can go ahead and manually change them in the inputs provided.</p>
          <p className='instructions-text'>To add sets or exercises to your workout, you can use the + icons provided with the appropriate labels. And to delete a set or exercise from your workout, selecting the trash can icon provided will remove that element from your workout.</p>
        </div>
        <div className='edit-section'>
          <div>{workoutForm}</div>
          <div>{exercises}</div>
          <hr />
          <form className='add-exercise-form' onSubmit={(event) => this.onAddExercise(event)}>
            <label htmlFor='exerciseName'>Add Exercise:</label>
            <input type='text' name='exerciseName' placeholder='Exercise Name...' />
            <button type='submit' className='add-exercise-button'><img src='https://d30y9cdsu7xlg0.cloudfront.net/png/74327-200.png' alt='add-icon' className='add-exercise-icon' /></button>
          </form>
          <Link to='/dashboard'><button onClick={() => this.props.dispatch(clearSelectedWorkout())} className='edit-done-button'>Done</button></Link>
        </div>
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
