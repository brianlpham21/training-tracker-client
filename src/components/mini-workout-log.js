import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import requiresLogin from './requires-login';
// import {fetchProtectedData} from '../actions/protected-data';

import Workout from './workout';

class MiniWorkoutLog extends Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchProtectedData());
  // }

  render() {
    return (
      <div>
        <h4>These are a list of recent workouts!</h4>
        <Workout />
      </div>
    );
  }
}

export default MiniWorkoutLog;
//
// const mapStateToProps = state => {
//   return {
//     workout: state.protectedData.data
//   };
// };
//
// export default requiresLogin()(connect(mapStateToProps)(MiniWorkoutLog));
