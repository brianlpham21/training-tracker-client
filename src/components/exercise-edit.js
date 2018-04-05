import React, { Component } from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import {editExercise} from '../actions/exercises';

import ExerciseDataSetEdit from './exercise-data-set-edit';

import './exercise-edit.css';

class ExerciseEdit extends Component {
  onEditExercise(event) {
    this.props.dispatch(editExercise(window.location.pathname.split('/')[2], event.target.className, event.target.value))
  }

  render() {
    const sets = this.props.sets.map((set, index) => {
      return <ExerciseDataSetEdit key={index} setNumber={index} {...set} set_button={this.props.set_button} />
    });

    if (sets.length > 0) {
      return (
        <div className='individual-exercise-edit'>
          <form className='edit-exercise-name'>
            <label htmlFor='edit-exercise-name'>Exercise Name:</label>
            <input type='text' id='edit-exercise-name' placeholder='Exercise Name' className={this.props._id} defaultValue={this.props.name} size='30' onBlur={(event) => this.onEditExercise(event)} />
          </form>
          {this.props.button}
          <table>
            <thead>
              <tr className='indvidual-exercise-data-header'>
                <th>Set</th>
                <th>Weight</th>
                <th>Repetitions</th>
              </tr>
            </thead>
            <tbody>
              {sets}
            </tbody>
          </table>
        </div>
      );
    }
    else {
      return (
        <div className='individual-exercise-edit'>
          <form className='edit-exercise-name'>
            <label htmlFor='edit-exercise-name'>Exercise Name:</label>
            <input type='text' id='edit-exercise-name' placeholder='Exercise Name' className={this.props._id} defaultValue={this.props.name} size='30' onBlur={(event) => this.onEditExercise(event)} />
          </form>
          {this.props.button}
          <table>
            <thead>
              <tr className='indvidual-exercise-data-header'>
                <th>-</th>
                <th>-</th>
                <th>-</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default requiresLogin()(connect()(ExerciseEdit));
