import React from 'react';
import {connect} from 'react-redux';

import TitleBar from './title-bar';
import RegistrationForm from './registration-form';

import {Link, Redirect} from 'react-router-dom';

import './registration-page.css'

export function RegistrationPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="registration-page">
      <TitleBar />
      <div className="registration-form-section">
        <h2>Register</h2>
        <RegistrationForm />
        <p>Aleady have an account? Click <Link to="/login">here</Link> to login.</p>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
