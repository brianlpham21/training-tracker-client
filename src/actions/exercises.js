import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const ADD_EXERCISE_SUCCESS = 'ADD_EXERCISE_SUCCESS';
export const addExerciseSuccess = addExerciseData => ({
    type: ADD_EXERCISE_SUCCESS,
    addExerciseData
});

export const EDIT_EXERCISE_DATA_SUCCESS = 'EDIT_EXERCISE_DATA_SUCCESS';
export const editExerciseDataSuccess = editExerciseData => ({
    type: EDIT_EXERCISE_DATA_SUCCESS,
    editExerciseData
});

export const DELETE_EXERCISE_DATA_SUCCESS = 'DELETE_EXERCISE_DATA_SUCCESS';
export const deleteExerciseDataSuccess = error => ({
    type: DELETE_EXERCISE_DATA_SUCCESS,
    error
});

export const EXERCISE_ERROR = 'EXERCISE_ERROR';
export const exerciseError = error => ({
    type: EXERCISE_ERROR,
    error
});

export const addExercise = (workout_id, name) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const url = `${API_BASE_URL}/workouts/` + workout_id + `/exercises`;

    return fetch(`${url}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': `application/json`
        },
        body: JSON.stringify({name: name})
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(addExerciseSuccess(data)))
        .catch(err => {
            dispatch(exerciseError(err));
        });
};

export const editExercise = (workout_id, exercise_id, name) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const url = `${API_BASE_URL}/workouts/` + workout_id + `/exercises/` + exercise_id;

    return fetch(`${url}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': `application/json`
        },
        body: JSON.stringify({name: name})
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(editExerciseDataSuccess(data)))
        .catch(err => {
            dispatch(exerciseError(err));
        });
};

export const deleteExercise = (workout_id, exercise_id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const url = `${API_BASE_URL}/workouts/` + workout_id + `/exercises/` + exercise_id;
    return fetch(`${url}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(deleteExerciseDataSuccess(data)))
        .catch(err => {
            dispatch(exerciseError(err));
        });
};
