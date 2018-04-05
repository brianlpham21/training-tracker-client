import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import StartScreen from './start-screen';
import MainContent from './main-content';

export function LandingPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <StartScreen />
      <MainContent />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
