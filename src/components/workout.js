import React, { Component } from 'react';

import Exercise from './exercise';

import {Link} from 'react-router-dom';

import './workout.css';

class Workout extends Component {
  render() {
    const exercises = this.props.exercises.map((exercise, index) => {
      return <Exercise key={index} {...exercise}/>
    })

    return (
      <div>
        <p>Workout: {this.props.name}</p>
        <div>{exercises}</div>
        <Link to='/editworkout'><button className='edit-button'>Edit</button></Link>
      </div>
    );
  }
}

export default Workout;
