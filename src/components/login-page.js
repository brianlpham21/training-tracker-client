import React from 'react';

import LoginForm from './login-form';

import {Link} from 'react-router-dom';

export default function LoginPage(props) {
    return (
        <div>
            <h2>Login</h2>
            <LoginForm />
            <Link to="/register">Register</Link>
            <Link to="/">Home</Link>
        </div>
    );
}
