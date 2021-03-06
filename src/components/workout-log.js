import React, {Component} from 'react';

import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchWorkoutData} from '../actions/workouts';

import Workout from './workout';
import WorkoutInstructions from './workout-instructions';

import './workout-log.css';

export class WorkoutLog extends Component {
  componentDidMount() {
    this.props.dispatch(fetchWorkoutData());
  }

  render() {
    let workouts = '';

    workouts = this.props.workout_data.map((workout, index) => {
      return <Workout key={index} {...workout}/>
    })

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
    workout_data: state.workouts.data || []
  };
};

export default requiresLogin()(connect(mapStateToProps)(WorkoutLog));
