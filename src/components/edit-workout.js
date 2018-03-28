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
        <h3>{this.props.select_workout_data.name}</h3>
        <div>{exercises}</div>
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
