import React, { Component } from 'react';

import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

import Workout from './workout';

import './workout-log.css';

class WorkoutLog extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    let workouts = '';

    if (this.props.workout[0]) {
      if (this.props.workout[0].user) {
        workouts = this.props.workout.map((workout, index) => {
          return <Workout key={index} {...workout}/>
        })
      }
    }
    
    return (
      <div className='workout-log'>
        <h3>Workouts</h3>
        <div>{workouts}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    workout: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(WorkoutLog));
