import React, { Component } from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {addWorkout} from '../actions/workouts';

import './add-workout.css';

class AddWorkout extends Component {
  onAddWorkout(event) {
    event.preventDefault();

    if (event.target.workoutName.value) {
      this.props.dispatch(addWorkout(event.target.workoutName.value))
        .then(data => window.location.replace(`editworkout/${data.addWorkoutData.workout_id}`));
    }
  }

  render() {
    return (
      <form
        className="add-workout"
        onSubmit= {(event) => this.onAddWorkout(event)}
        >
        <input type="text" name="workoutName" className='add-workout-input' placeholder='Enter Workout Name...' autoFocus />
        <button
          type="submit"
          className="add-workout-button"
          >
          Start Workout
        </button>
      </form>
    );
  }
}

export default requiresLogin()(connect()(AddWorkout));
