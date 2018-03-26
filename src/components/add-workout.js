import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import Input from './input';

class AddWorkout extends Component {
  render() {
    // onSubmit(value) {
    //   const {workoutName} = value;
    //   const workout = {workoutName};
    //   return this.props
    //     .dispatch(addWorkout(workout))
    // }

    return (
      <form
        className="add-workout"
        // onSubmit={this.props.handleSubmit(value =>
        //   this.onSubmit(value)
        // )}
        >
        <label htmlFor="workoutName">Workout Name:</label>
        <Field component={Input} type="text" name="workoutName" />
        <button
          type="submit"
          className="submit-button"
          disabled={this.props.pristine || this.props.submitting}>
          Start Workout
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'add-workout',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('add-workout', Object.keys(errors)[0]))
})(AddWorkout);
