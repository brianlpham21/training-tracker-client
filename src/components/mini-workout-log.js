import React, { Component } from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

import Workout from './workout';

class MiniWorkoutLog extends Component {
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
      <div>
        <h4>Recent Workouts</h4>
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

export default requiresLogin()(connect(mapStateToProps)(MiniWorkoutLog));
