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

  homeClicked(event) {
    event.preventDefault();

    event.target.parentElement.nextSibling.firstChild.classList.remove('current');
    event.target.parentElement.nextSibling.nextSibling.firstChild.classList.remove('current');

    if (!(event.target.classList.contains('current'))) {
      event.target.classList.add('current');
      return;
    }
  }

  howClicked(event) {
    event.preventDefault();

    event.target.parentElement.nextSibling.firstChild.classList.remove('current');
    event.target.parentElement.previousSibling.firstChild.classList.remove('current');

    if (!(event.target.classList.contains('current'))) {
      event.target.classList.add('current');
      return;
    }
  }

  logClicked(event) {
    event.preventDefault();

    event.target.parentElement.previousSibling.previousSibling.firstChild.classList.remove('current');
    event.target.parentElement.previousSibling.firstChild.classList.remove('current');

    if (!(event.target.classList.contains('current'))) {
      event.target.classList.add('current');
      return;
    }
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
                <li className='nav-home-link' onClick={e => this.homeClicked(e)}><Link to='/' className='nav-home-link-component current'>Home</Link></li>
                <li className='nav-how-link' onClick={e => this.howClicked(e)}><Link to='/how-it-works' className='nav-how-link-component'>How It Works</Link></li>
                <li className='nav-workoutlog-link' onClick={e => this.logClicked(e)}><Link to='/dashboard/workoutlog' className='nav-workoutlog-link-component'>Workout Log</Link></li>
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
