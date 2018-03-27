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
    console.log(this.props.workout);

    return (
      <div>
        <h4>Recent Workouts</h4>
        <p>{this.props.workout}</p>
        <Workout data={this.props.workout}/>
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
