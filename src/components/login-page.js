import React from 'react';
import {connect} from 'react-redux';

import LoginForm from './login-form';
import TitleBar from './title-bar';

import {Link, Redirect} from 'react-router-dom';

export function LoginPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <TitleBar />
      <h2>Login</h2>
      <LoginForm />
      <p>Don't have an account yet? Click <Link to="/register">here</Link> to register</p>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
