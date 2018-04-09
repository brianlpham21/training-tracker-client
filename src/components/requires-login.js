import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import ReactLoading from 'react-loading';

import './requires-login.css';

export default () => Component => {
    function RequiresLogin(props) {
        const {authenticating, loggedIn, error, ...passThroughProps} = props;
        if (authenticating) {
          return <div className='loading'><ReactLoading type='spinningBubbles' color='gold' height='75px' width='75px' /></div>
        } else if (!loggedIn || error) {
            return <Redirect to="/" />;
        }

        return <Component {...passThroughProps} />;

    }

    const displayName = Component.displayName || Component.name || 'Component';
    RequiresLogin.displayName = `RequiresLogin(${displayName})`;

    const mapStateToProps = (state, props) => ({
        authenticating: state.auth.loading,
        loggedIn: state.auth.currentUser !== null,
        error: state.auth.error
    });

    return connect(mapStateToProps)(RequiresLogin);
};
