import React, { Component } from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchSelectWorkoutData} from '../actions/workouts';
import { compose, withState } from "recompose";
import { Field, reduxForm } from "redux-form";

import Exercise from './exercise';

import {Link} from 'react-router-dom';

import './edit-workout.css';

const withIsEditing = withState("isEditing", "setIsEditing", false);

const EditableField = compose(withIsEditing)(props => {
  const {id, isEditing, setIsEditing, value} = props;

  if (!isEditing) {
    return (
      <div>
        <div>Workout Name: {value}</div>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  }

  if (isEditing) {
    const formProps = {
      form: `editable-field-${id}`,
      onSubmit: () => setIsEditing(false),
      initial: {
        inlineField: {value}
      }
    };

    return <EditableFieldEditor {...formProps} />;
  }
});

const EditableFieldEditor = reduxForm()(props => (
  <form onSubmit={props.submit}>
    <Field
      name="inlineField"
      component="input"
      placeholder={props.initial.inlineField.value}
      value="test"
      autoFocus
    />
  </form>
));

class EditWorkoutWorking extends Component {
  componentDidMount() {
    this.props.dispatch(fetchSelectWorkoutData(window.location.pathname.split('/')[2]));
  }

  editWorkoutName(event) {
    event.preventDefault();

    const workoutInput = document.getElementsByClassName('workout-name')[0];

    workoutInput.outerHTML = `
      <form class='edit-workout-name' >
        <input type="text" id="edit-workout-name" placeholder="Workout Name" value="${workoutInput.innerHTML}" size="50" autofocus>
        <button type="submit" class='edit-workout-name-form-submit'>Submit</button>
        <button class='edit-workout-name-form-cancel'>Cancel</button>
      </form>
    `;

    let editWorkoutNameButton = document.getElementsByClassName('edit-workout-name-button')[0];
    editWorkoutNameButton.style.display = 'none';
  }

  render() {
    let exercises = '';

    if (this.props.select_workout_data) {
      if(this.props.select_workout_data.exercises) {
        exercises = this.props.select_workout_data.exercises.map((exercises, index) => {
          return <Exercise key={index} {...exercises}/>
        })
      }
    }

    return (
      <div className='edit-section'>
        <h3 className='workout-name'>{this.props.select_workout_data.name}</h3>
        <EditableField value={this.props.select_workout_data.name} id="workoutName" />
        <div>{exercises}</div>
        <button className='add-exercise-button'>Add Exercise</button>
        <Link to='/dashboard'><button className='edit-done-button'>Done</button></Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    select_workout_data: state.workouts.selectWorkoutData,
  };
};

export default requiresLogin()(connect(mapStateToProps)(EditWorkoutWorking));
