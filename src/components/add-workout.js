import React, {Component} from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {addWorkout} from '../actions/workouts';

import './add-workout.css';

export class AddWorkout extends Component {
  onAddWorkout(event) {
    event.preventDefault();

    if(!event.target.workoutName.value) {
      alert('Enter a workout name.');
    }

    if (event.target.workoutName.value) {
      this.props.dispatch(addWorkout(event.target.workoutName.value))
        .then(data => window.location.replace(`editworkout/${data.addWorkoutData.workout_id}`));
    }
  }

  render() {
    return (
      <div className='add-workout-main'>
        <div className='add-workout-container'>
          <p className='start-text'><span className='start-title'>Start Here:</span> This is your user dashboard. It is from here that you can start a new workout, catch a glimpse of your most recent workouts, or view your complete workout log history. To start a new workout, simply enter your workout name into the input bar and click the 'Start Workout' button. You can also go ahead and edit or delete recent workouts from this page or view past workouts in the complete workout log page.</p>
          <p className='start-text'>Completely lost on where to start? That's alright. Check out the 'How It Works' page by clicking on the tab in the navigation bar at the top!</p>
          <form
            className="add-workout"
            onSubmit= {(event) => this.onAddWorkout(event)}
          >
            <input
              type="text"
              name="workoutName"
              className='add-workout-input'
              placeholder='Enter Workout Name...'
              autoFocus
            />
            <button
              type="submit"
              className="add-workout-button"
            >
              Start Workout
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default requiresLogin()(connect()(AddWorkout));
