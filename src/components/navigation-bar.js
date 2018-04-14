import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import home from '../images/home.png';
import how from '../images/wrench.png';
import log from '../images/book.png';

import {slide as Menu} from 'react-burger-menu'

import './navigation-bar.css';

export class NavigationBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  logOut() {
    this.setState({menuOpen: false});
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render() {
    let logOutButton;
    let burgerMenu;

    if (this.props.loggedIn) {
      burgerMenu = (
        <div>
          <Menu
            right
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
          >
            <button className='burger-menu-close' onClick={() => this.closeMenu()}>X</button>
            <Link to='/' className='nav-home-link-component burger-text first-burger-item' onClick={() => this.closeMenu()}><img src={home} alt='home-icon' className='burger-icon'/>Home</Link>
            <Link to='/dashboard/how-it-works' className='nav-how-link-component burger-text' onClick={() => this.closeMenu()}><img src={how} alt='how-icon' className='burger-icon'/>How It Works</Link>
            <Link to='/dashboard/workoutlog' className='nav-workoutlog-link-component burger-text' onClick={() => this.closeMenu()}><img src={log} alt='log-icon' className='burger-icon'/>Workout Log</Link>
            <button onClick={() => this.logOut()} className='nav-logout-button'>Log out</button>
          </Menu>
        </div>
      );

      logOutButton = (
        <nav className='navigation-bar'>
          <div id="nav-container">
            <Link to='/' className='header-bar-link-component'>
              <h2 className='header-bar-title'>Training Tracker</h2>
            </Link>
            <div id="nav-links">
              <ul>
                <li className='nav-home-link'>
                  <Link to='/' className='nav-home-link-component'>Home</Link>
                </li>
                <li className='nav-how-link'>
                  <Link to='/dashboard/how-it-works' className='nav-how-link-component'>How It Works</Link>
                </li>
                <li className='nav-workoutlog-link'>
                  <Link to='/dashboard/workoutlog' className='nav-workoutlog-link-component'>Workout Log</Link>
                </li>
                <button onClick={() => this.logOut()} className='nav-logout-button'>Log out</button>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
    return (
      <div className="header-bar">
        <div className='burger-menu'>{burgerMenu}</div>
        <div>{logOutButton}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavigationBar);
