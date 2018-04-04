import React, {Component} from 'react';

import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchWorkoutData} from '../actions/workouts';

import Workout from './workout';
import WorkoutInstructions from './workout-instructions';

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
      <div>
        <WorkoutInstructions />
        <div className='workout-log'>{workouts}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    workout_data: state.workouts.workoutData
  };
};

export default requiresLogin()(connect(mapStateToProps)(WorkoutLog));
