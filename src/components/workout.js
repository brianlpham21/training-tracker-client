import React, { Component } from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {deleteWorkout} from '../actions/workouts';

import Exercise from './exercise';

import {Link} from 'react-router-dom';

import './workout.css';

export class Workout extends Component {
  onDelete(event) {
    const {workout_id} = this.props;
    const data = {workout_id};

    const result = window.confirm('Are you sure?')
    if (result) {
      this.props.dispatch(deleteWorkout(data));
      window.location.reload();
    }
    else {
      event.target.blur();
    }
  };

  render() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[Number(this.props.date.slice(5, 7)) - 1];
    const date = `${month} ${this.props.date.slice(8, 10)}, ${this.props.date.slice(0,4)}`

    const exercises = this.props.exercises.map((exercise, index) => {
      return <Exercise key={index} {...exercise}/>
    })

    return (
      <div className='individual-workout'>
        <h3 className='individual-workout-title'>Workout: {this.props.name} <span className='individual-workout-date'> {date}</span></h3>
        <div>{exercises}</div>
        <Link to={`/editworkout/${this.props.workout_id}`}>
          <button className='edit-workout-button'>Edit</button>
        </Link>
        <button className='delete-workout-button' onClick={(event) => this.onDelete(event)}>Delete</button>
      </div>
    );
  }
}

export default requiresLogin()(connect()(Workout));
