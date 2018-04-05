import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import NavigationBar from './navigation-bar';
import LandingPage from './landing-page/landing-page';
import LoginPage from './login-page';
import RegistrationPage from './registration-page';
import About from './about-page';
import Dashboard from './dashboard';
import WorkoutLog from './workout-log';
import EditWorkout from './edit-workout';
import HowPage from './how-page';
import Footer from './footer';

import {refreshAuthToken} from '../actions/auth';

import './app.css';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div className="app">
        <div className="main-content">
          <NavigationBar />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegistrationPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/workoutlog" component={WorkoutLog} />
          <Route exact path="/dashboard/how-it-works" component={HowPage} />
          <Route exact path="/editworkout/:workout_id" component={EditWorkout} />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
