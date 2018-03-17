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
        <div className="dashboard-username">
            Username: {this.props.username}
        </div>
        <div className="dashboard-name">Name: {this.props.name}</div>
        <AddForm />
        <MiniWorkoutLog />
        <Link to='/dashboard/workoutlog'><button className='workout-log-button'>Workout Log</button></Link>
        <div className="dashboard-protected-data">
            Protected data: {this.props.protectedData}
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
