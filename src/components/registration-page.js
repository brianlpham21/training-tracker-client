import React from 'react';
import {connect} from 'react-redux';

import TitleBar from './title-bar';
import RegistrationForm from './registration-form';

import {Link, Redirect} from 'react-router-dom';

export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="home">
      <TitleBar />
      <h2>Register</h2>
      <RegistrationForm />
      <p>Aleady have an account? Click <Link to="/login">here</Link> to login.</p>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
