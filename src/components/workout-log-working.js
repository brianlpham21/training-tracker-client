import React, { Component } from 'react';

import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchWorkoutData} from '../actions/workouts';

import WorkoutWorking from './workout-working';

import './workout-log-working.css';

class WorkoutLogWorking extends Component {
  componentDidMount() {
    this.props.dispatch(fetchWorkoutData());
  }

  render() {
    let workouts = '';

    if (this.props.workout_data[0]) {
      if (this.props.workout_data[0].user) {
        workouts = this.props.workout_data.map((workout, index) => {
          return <WorkoutWorking key={index} {...workout}/>
        })
      }
    }

    return (
      <main class="main-area">
       <div class="centered">
          <h1 className='workout-log-title'>Workouts</h1>
         <section class="cards">
          <div>{workouts}</div>
         </section>
       </div>
     </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    workout_data: state.workouts.workoutData
  };
};

export default requiresLogin()(connect(mapStateToProps)(WorkoutLogWorking));
