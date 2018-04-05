import React, {Component} from 'react';

import './workout-instructions.css';

class WorkoutInstructions extends Component {
  render() {
    return (
      <div className='workout-instructions-main'>
        <div className='workout-instructions-container'>
          <h1 className='workout-log-title'>Workout Log</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.</p>
        </div>
      </div>
    );
  }
}

export default WorkoutInstructions
