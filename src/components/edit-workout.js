import React, { Component } from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchWorkoutData} from '../actions/workouts';
import {editWorkout} from '../actions/workouts';
import {addExercise} from '../actions/exercises';
import {addSet} from '../actions/sets';

import ExerciseEdit from './exercise-edit';

import {Link} from 'react-router-dom';

import './edit-workout.css';

export class EditWorkout extends Component {
  componentDidMount() {
    this.props.dispatch(fetchWorkoutData());
  }

  onEditWorkout(id, event) {
    event.preventDefault();
    this.props.dispatch(editWorkout(id, event.target.value))
  }

  onAddExercise(event) {
    event.preventDefault();
    if (event.target.exerciseName.value) {
      this.props.dispatch(addExercise(this.props.id, event.target.exerciseName.value))
        .then(data => window.location.reload());
    }
  }

  onAddSet(workout_id, exercise_id, event) {
    event.preventDefault();

    if (event.target.setWeight.value && !(event.target.setRepetitions.value)) {
      alert('Enter the repetitions!')
    }

    if (!(event.target.setWeight.value) && event.target.setRepetitions.value) {
      alert('Enter the weight!')
    }

    if (event.target.setWeight.value && event.target.setRepetitions.value) {
      this.props.dispatch(addSet(workout_id, exercise_id, event.target.setWeight.value, event.target.setRepetitions.value))
        .then(data => window.location.reload());
    }
  }

  render() {
    const id = this.props.id;

    const workout = (this.props.select_workout_data.filter(function(workout) {
      return workout.workout_id === id;
    }));

    let workoutForm = '';
    let exercises ='';

    if (workout[0]) {
      if (workout[0].user) {
        workoutForm =
          <div className='edit-workout-section'>
            <label htmlFor="edit-workout-name">Workout Name:</label>
            <form className='edit-workout-name'>
              <input
                type='text'
                id='edit-workout-name'
                placeholder='Workout Name'
                defaultValue={workout[0].name}
                size='30'
                onBlur={(event) => this.onEditWorkout(workout[0].workout_id, event)}
              />
            </form>
          </div>
      }
    }

    if (workout[0]) {
      if(workout[0].user) {
        exercises = workout[0].exercises.map((exercises, index) => {
          return (
            <div key={index}>
              <ExerciseEdit {...exercises} id={this.props.id} />
              <form
                className='add-set-form'
                onSubmit= {(event) => this.onAddSet(workout[0].workout_id, exercises._id, event)}
              >
                <input
                  type='number'
                  name='setWeight'
                  placeholder='Set Weight'
                  min='0'
                />
                <input
                  type='number'
                  name='setRepetitions'
                  placeholder='Set Repetitions'
                  min='0'
                />
                <button type='submit' className='add-set-button'>
                  <img
                    src='https://d30y9cdsu7xlg0.cloudfront.net/png/74327-200.png'
                    alt='add-icon'
                    className='add-set-icon'
                  />
                </button>
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
          <form
            className='add-exercise-form'
            onSubmit={(event) => this.onAddExercise(event)}
          >
            <label htmlFor='exerciseName'>Add Exercise:</label>
            <input
              type='text'
              name='exerciseName'
              placeholder='Exercise Name...'
            />
            <button type='submit' className='add-exercise-button'>
              <img
                src='https://d30y9cdsu7xlg0.cloudfront.net/png/74327-200.png'
                alt='add-icon'
                className='add-exercise-icon'
              />
            </button>
          </form>
          <Link to='/dashboard'>
            <button className='edit-done-button'>Done</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    select_workout_data: state.workouts.data || [],
  };
};

export default requiresLogin()(connect(mapStateToProps)(EditWorkout));
