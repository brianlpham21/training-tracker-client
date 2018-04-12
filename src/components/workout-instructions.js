import React, {Component} from 'react';

import './workout-instructions.css';

export class WorkoutInstructions extends Component {
  render() {
    return (
      <div className='workout-instructions-main'>
        <div className='workout-instructions-container'>
          <h1 className='workout-log-title'>Workout Log</h1>
          <p>Below you will find your personal workout log. If you don't see any workouts, go ahead and start working out now so you have some to enter! In the workout log you will find all your past workouts, the exercises that you completed, and the amount of sets and repetitions completed at a given weight. You can go ahead and edit the contents of each workout using the 'Edit' button or delete a workout in its entirety using the 'Delete' button.</p>
          <p>Easy enough, huh?</p>
        </div>
      </div>
    );
  }
}

export default WorkoutInstructions
