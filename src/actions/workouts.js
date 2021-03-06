import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_WORKOUT_DATA_SUCCESS = 'FETCH_WORKOUT_DATA_SUCCESS';
export const fetchWorkoutDataSuccess = workoutData => ({
    type: FETCH_WORKOUT_DATA_SUCCESS,
    workoutData
});

export const ADD_WORKOUT_SUCCESS = 'ADD_WORKOUT_SUCCESS';
export const addWorkoutSuccess = addWorkoutData => ({
    type: ADD_WORKOUT_SUCCESS,
    addWorkoutData
});

export const EDIT_WORKOUT_SUCCESS = 'EDIT_WORKOUT_SUCCESS';
export const editWorkoutSuccess = editWorkoutData => ({
    type: EDIT_WORKOUT_SUCCESS,
    editWorkoutData
});

export const DELETE_WORKOUT_DATA_SUCCESS = 'DELETE_WORKOUT_DATA_SUCCESS';
export const deleteWorkoutDataSuccess = error => ({
    type: DELETE_WORKOUT_DATA_SUCCESS,
    error
});

export const WORKOUT_ERROR = 'WORKOUT_ERROR';
export const workoutError = error => ({
    type: WORKOUT_ERROR,
    error
});

export const fetchWorkoutData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/workouts`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => (data.reverse()))
        .then((data) => dispatch(fetchWorkoutDataSuccess(data)))
        .catch(err => {
            dispatch(workoutError(err));
        });
};

export const addWorkout = name => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    return fetch(`${API_BASE_URL}/workouts`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': `application/json`
        },
        body: JSON.stringify({name: name})
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(addWorkoutSuccess(data)))
        .catch(err => {
            dispatch(workoutError(err));
        });
};

export const editWorkout = (workout_id, name) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const url = `${API_BASE_URL}/workouts/` + workout_id;

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
        .then(data => dispatch(editWorkoutSuccess(data)))
        .catch(err => {
            dispatch(workoutError(err));
        });
};

export const deleteWorkout = data => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const url = `${API_BASE_URL}/workouts/` + data.workout_id;
    return fetch(`${url}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(deleteWorkoutDataSuccess(data)))
        .catch(err => {
            dispatch(workoutError(err));
        });
};
