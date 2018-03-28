import React, { Component } from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {deleteWorkout} from '../actions/protected-data';

import Exercise from './exercise';

import {Link} from 'react-router-dom';

import './workout.css';

class Workout extends Component {
  onDelete() {
    const {workout_id} = this.props;
    const data = {workout_id};

    const result = window.confirm('Are you sure?')
    if (result) {
      this.props.dispatch(deleteWorkout(data));
      window.location.reload()
    }
  };

  render() {
    const exercises = this.props.exercises.map((exercise, index) => {
      return <Exercise key={index} {...exercise}/>
    })

    return (
      <div>
        <p>Workout: {this.props.name}</p>
        <div>{exercises}</div>
        <Link to={`/editworkout/${this.props.workout_id}`} ><button className='edit-workout-button'>Edit</button></Link>
        <button className='delete-workout-button' onClick={() => this.onDelete()}>Delete</button>
      </div>
    );
  }
}

// export default Workout;

export default requiresLogin()(connect()(Workout));
