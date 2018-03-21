import React, { Component } from 'react';

import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import './edit-workout.css';

class EditWorkout extends Component {
  render() {
    return (
      <div className='edit-section'>
        <p>Edit This Workout</p>
        <input />
        <button>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(EditWorkout));
