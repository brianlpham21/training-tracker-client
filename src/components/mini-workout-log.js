import React, { Component } from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchRecentWorkoutData} from '../actions/protected-data';

import Workout from './workout';

import './mini-workout-log.css';

class MiniWorkoutLog extends Component {
  componentDidMount() {
    this.props.dispatch(fetchRecentWorkoutData());
  }

  render() {
    let workouts = '';

    if (this.props.recent_workout_data[0]) {
      if (this.props.recent_workout_data[0].user) {
        workouts = this.props.recent_workout_data.map((workout, index) => {
          return <Workout key={index} {...workout}/>
        })
      }
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
    recent_workout_data: state.protectedData.recentWorkoutData
  };
};

export default requiresLogin()(connect(mapStateToProps)(MiniWorkoutLog));
