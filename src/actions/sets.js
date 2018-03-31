import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const ADD_SET_SUCCESS = 'ADD_SET_SUCCESS';
export const addSetSuccess = addSetData => ({
    type: ADD_SET_SUCCESS,
    addSetData
});

export const DELETE_SET_DATA_SUCCESS = 'DELETE_SET_DATA_SUCCESS';
export const deleteSetDataSuccess = error => ({
    type: DELETE_SET_DATA_SUCCESS,
    error
});

export const SET_ERROR = 'SET_ERROR';
export const setError = error => ({
    type: SET_ERROR,
    error
});

export const addSet = (workout_id, exercise_id, weight, repetitions) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const url = `${API_BASE_URL}/workouts/` + workout_id + `/exercises/` + exercise_id + `/sets`;

    return fetch(`${url}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': `application/json`
        },
        body: JSON.stringify({weight: weight, repetitions: repetitions})
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(addSetSuccess(data)))
        .catch(err => {
            dispatch(setError(err));
        });
};

export const deleteSet = (workout_id, exercise_id, set_id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const url = `${API_BASE_URL}/workouts/` + workout_id + `/exercises/` + exercise_id + `/sets/` + set_id;
    return fetch(`${url}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(deleteSetDataSuccess(data)))
        .catch(err => {
            dispatch(setError(err));
        });
};
