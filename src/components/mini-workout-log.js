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
    let i = this.props.workout;
    let array = Object.values(i);
    console.log(array);

    return (
      <div>
        <h4>Recent Workouts</h4>
        <p>{typeof this.props.workout}</p>
        <Workout />
      </div>
    );
  }
}

// export default MiniWorkoutLog;

const mapStateToProps = state => {
  return {
    workout: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(MiniWorkoutLog));
