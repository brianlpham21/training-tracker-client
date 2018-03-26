import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import Input from './input';

class AddWorkout extends Component {
  render() {
    return (
      <form
        className="add-form">
        <label htmlFor="workoutName">Workout name:</label>
        <Field component={Input} type="text" name="workoutName" />
        <button
          type="submit"
          className="submit-button"
          disabled={this.props.pristine || this.props.submitting}>
          Add
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
