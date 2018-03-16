import React, { Component } from 'react';

import Exercise from './exercise';

import {Link} from 'react-router-dom';

class Workout extends Component {
  render() {
    return (
      <div>
        <p>These are the exercises in the workout:</p>
        <Exercise />
        <Exercise />
        <Link to='/editworkout'><button>Edit</button></Link>
      </div>
    );
  }
}

export default Workout;
