import React from 'react';

import LoginForm from './login-form';
import TitleBar from './title-bar';

import {Link} from 'react-router-dom';

export default function LoginPage(props) {
  return (
    <div>
      <TitleBar />
      <h2>Login</h2>
      <LoginForm />
      <p>Don't have an account yet? Click <Link to="/register">here</Link> to register</p>
    </div>
  );
}
