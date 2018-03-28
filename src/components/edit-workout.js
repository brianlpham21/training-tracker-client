import React, { Component } from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchSelectWorkoutData} from '../actions/protected-data';

import Exercise from './exercise';

import {Link} from 'react-router-dom';

import './edit-workout.css';

class EditWorkout extends Component {
  componentDidMount() {
    this.props.dispatch(fetchSelectWorkoutData(window.location.pathname.split('/')[2]));
  }

  onSubmit(event) {
    console.log('hi');
  }

  editWorkoutName(event) {
    event.preventDefault();

    const workoutInput = document.getElementsByClassName('workout-name')[0];

    workoutInput.outerHTML = `
      <form class='edit-workout-name'>
        <input type="text" id="edit-workout-name" placeholder="Workout Name" value="${workoutInput.innerHTML}" size="50" autofocus>
        <button type="submit" class='edit-workout-name-form-submit'>Submit</button>
        <button class='edit-workout-name-form-cancel'>Cancel</button>
      </form>
    `;

    let editWorkoutNameButton = document.getElementsByClassName('edit-workout-name-button')[0];
    editWorkoutNameButton.style.display = 'none';
  }

  render() {
    let exercises = '';

    if (this.props.select_workout_data) {
      if(this.props.select_workout_data.exercises) {
        exercises = this.props.select_workout_data.exercises.map((exercises, index) => {
          return <Exercise key={index} {...exercises}/>
        })
      }
    }

    return (
      <div className='edit-section'>
        <h3 className='workout-name'>{this.props.select_workout_data.name}</h3>
        <button className='edit-workout-name-button' onClick= {(event) => this.editWorkoutName(event)}>Edit Workout Name</button>
        <div>{exercises}</div>
        <button className='add-exercise-button'>Add Exercise</button>
        <button className='edit-submit-button'>Submit</button>
        <Link to='/dashboard'><button className='edit-cancel-button'>Cancel</button></Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    select_workout_data: state.protectedData.selectWorkoutData
  };
};

export default requiresLogin()(connect(mapStateToProps)(EditWorkout));
