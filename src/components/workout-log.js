import React, { Component } from 'react';

import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchWorkoutData} from '../actions/protected-data';

import Workout from './workout';

import './workout-log.css';

class WorkoutLog extends Component {
  componentDidMount() {
    this.props.dispatch(fetchWorkoutData());
  }

  render() {
    let workouts = '';

    if (this.props.workout_data[0]) {
      if (this.props.workout_data[0].user) {
        workouts = this.props.workout_data.map((workout, index) => {
          return <Workout key={index} {...workout}/>
        })
      }
    }

    return (
      <div className='workout-log'>
        <h1 className='workout-log-title'>Workouts</h1>
        <div>{workouts}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    workout_data: state.protectedData.workoutData
  };
};

export default requiresLogin()(connect(mapStateToProps)(WorkoutLog));
