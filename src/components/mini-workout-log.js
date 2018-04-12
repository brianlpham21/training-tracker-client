import React, { Component } from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchWorkoutData} from '../actions/workouts';

import Workout from './workout';

import './mini-workout-log.css';

export class MiniWorkoutLog extends Component {
  componentDidMount() {
    this.props.dispatch(fetchWorkoutData());
  }

  render() {
    let workouts = '';

    workouts = this.props.workout_data.slice(0, 3).map((workout, index) => {
      return <Workout key={index} {...workout}/>
    })

    if (workouts.length < 1) {
      return (
        <div className='mini-workout-log'>
        </div>
      )
    }

    return (
      <div className='mini-workout-log'>
        <h1 className='mini-workout-log-title'>Recent Workouts</h1>
        <div>{workouts}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    workout_data: state.workouts.data || []
  };
};

export default requiresLogin()(connect(mapStateToProps)(MiniWorkoutLog));
