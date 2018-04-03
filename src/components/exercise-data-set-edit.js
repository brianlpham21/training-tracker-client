import React, { Component } from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

import {editSetWeight} from '../actions/sets';
import {editSetRepetitions} from '../actions/sets';

import './exercise-data-set-edit.css';

class ExerciseDataSetEdit extends Component {
  onEditSetWeight(event) {
    this.props.dispatch(editSetWeight(window.location.pathname.split('/')[2], event.target.parentElement.parentElement.parentElement.parentElement.parentElement.previousSibling.previousSibling.firstChild.className, event.target.parentElement.parentElement.parentElement.id, event.target.value, event.target.parentElement.parentElement.previousSibling.innerHTML))
  }

  onEditSetRepetitions(event) {
    this.props.dispatch(editSetRepetitions(window.location.pathname.split('/')[2], event.target.parentElement.parentElement.parentElement.parentElement.parentElement.previousSibling.previousSibling.firstChild.className, event.target.parentElement.parentElement.parentElement.id, event.target.value, event.target.parentElement.parentElement.previousSibling.previousSibling.innerHTML))
  }

  render() {
    return (
      <tr className='exercise-data-edit' id={this.props._id}>
        <td>{this.props.setNumber + 1}</td>
        <td>
          <form className='edit-set-weight'>
            <input type='text' id='edit-set-weight' placeholder='Set Weight' defaultValue={this.props.weight} size='30' onBlur={(event) => this.onEditSetWeight(event)} />
          </form>
        </td>
        <td>
          <form className='edit-set-repetitions'>
            <input type='text' id='edit-set-repetitions' placeholder='Set Repetitions' defaultValue={this.props.repetitions} size='30' onBlur={(event) => this.onEditSetRepetitions(event)} />
          </form>
        </td>
        <td>{this.props.set_button}</td>
      </tr>
    );
  }
}

export default requiresLogin()(connect()(ExerciseDataSetEdit));
