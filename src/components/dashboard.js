import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

import AddForm from './add-form';
import MiniWorkoutLog from './mini-workout-log';

import {Link} from 'react-router-dom';

import './dashboard.css';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <div className="dashboard">
        <AddForm />
        <MiniWorkoutLog />
        <Link to='/dashboard/workoutlog'><button className='workout-log-button'>Workout Log</button></Link>
        <div className="dashboard-protected-data">
            <p>Protected data: {this.props.protectedData}</p>
        </div>
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

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
