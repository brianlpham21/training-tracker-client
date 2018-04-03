import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import './navigation-bar.css';

export class NavigationBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <nav className='navigation-bar'>
          <div id="nav-container">
            <Link to='/' className='header-bar-link-component' ><h2 className='header-bar-title'>Training Tracker</h2></Link>

            <div id="nav-links">
              <ul>
                <li className='nav-home-link'><Link to='/' className='nav-home-link-component'>Home</Link></li>
                <li className='nav-workoutlog-link'><Link to='/dashboard/workoutlog' className='nav-workoutlog-link-component'>Workout Log</Link></li>
                <li className='nav-about-link'><Link to='/about' className='nav-about-link-component'>About</Link></li>
                <button onClick={() => this.logOut()} className='nav-logout-button'>Log out</button>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
    return (
      <div className="header-bar">
        <div>{logOutButton}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavigationBar);
