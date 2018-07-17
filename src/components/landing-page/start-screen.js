import React from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';

import {login} from '../../actions/auth';

import logo from '../../images/logo.png';
import arrow from '../../images/arrow.png';

import './start-screen.css';

export class StartScreen extends React.Component {
  onClick() {
    const {username, password} = {username: 'demo', password: 'brianbrian'};
    return this.props.dispatch(login(username, password))
  }

  render() {
    return (
      <div className='start-screen'>
        <div className='container'>
          <img
            src={logo}
            alt='main-logo'
            className='main-logo'
          />
          <h2 className='title'>Training Tracker</h2>
          <p className='title-description'>Set and Track Your Fitness Goals</p>
          <ul>
            <li>
              <Link to='/register'>
                <button className='register-button'>Register</button>
              </Link>
            </li>
            <li>
              <Link to='/login'>
                <button className='login-button'>Log In</button>
              </Link>
            </li>
            <li className="demo-button-link">
              <button className='demo-button' onClick={() => this.onClick()}>View Demo</button>
            </li>
          </ul>
          <img
            src={arrow}
            alt='arrow-down'
            className='arrow-down'
          />
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(StartScreen);
