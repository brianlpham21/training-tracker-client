import React, { Component } from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {addWorkout} from '../actions/protected-data';

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
        <label htmlFor="workoutName">Workout Name:</label>
        <input type="text" name="workoutName" />
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
