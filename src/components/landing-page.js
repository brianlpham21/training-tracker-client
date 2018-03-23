import React from 'react';
import {connect} from 'react-redux';

import StartScreen from './start-screen';
import MainContent from './main-content';
import Footer from './footer';

import {Redirect} from 'react-router-dom';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <StartScreen />
      <MainContent />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
