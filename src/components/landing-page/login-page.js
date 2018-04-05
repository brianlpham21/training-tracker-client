import React from 'react';
import {connect} from 'react-redux';

import TitleBar from './title-bar';
import LoginForm from './login-form';

import {Link, Redirect} from 'react-router-dom';

import './login-page.css'

export function LoginPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className='login-page'>
      <TitleBar />
      <div className='login-form-section'>
        <h2>Login</h2>
        <p>For demo account use: Username (demo) and Password (brianbrian)</p>
        <LoginForm />
        <p>Don't have an account yet? Click <Link to="/register">here</Link> to register.</p>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
