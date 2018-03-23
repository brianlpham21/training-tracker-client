import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import './header-bar.css';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <div className='header-title-bar'>
          <Link to='/'><button className='home-button'>Home</button></Link>
          <Link to='/' className='header-bar-link-component'><h2 className='header-bar-title'>Training Tracker</h2></Link>
          <button onClick={() => this.logOut()} className='logout-button'>Log out</button>
        </div>
      );
    }
    return (
      <div className="header-bar">
        {logOutButton}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
