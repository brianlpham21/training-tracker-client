import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_WORKOUT_DATA_SUCCESS = 'FETCH_WORKOUT_DATA_SUCCESS';
export const fetchWorkoutDataSuccess = workoutData => ({
    type: FETCH_WORKOUT_DATA_SUCCESS,
    workoutData
});

export const FETCH_RECENT_WORKOUT_DATA_SUCCESS = 'FETCH_RECENT_WORKOUT_DATA_SUCCESS';
export const fetchRecentWorkoutDataSuccess = recentWorkoutData => ({
    type: FETCH_RECENT_WORKOUT_DATA_SUCCESS,
    recentWorkoutData
});

export const FETCH_SELECT_WORKOUT_DATA_SUCCESS = 'FETCH_SELECT_WORKOUT_DATA_SUCCESS';
export const fetchSelectWorkoutDataSuccess = selectWorkoutData => ({
    type: FETCH_SELECT_WORKOUT_DATA_SUCCESS,
    selectWorkoutData
});

export const ADD_WORKOUT_SUCCESS = 'ADD_WORKOUT_SUCCESS';
export const addWorkoutSuccess = addWorkoutData => ({
    type: ADD_WORKOUT_SUCCESS,
    addWorkoutData
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const fetchProtectedData = () => (dispatch, getState) => {
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
        .then((data) => dispatch(fetchProtectedDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

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
            dispatch(fetchProtectedDataError(err));
        });
};

export const fetchRecentWorkoutData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/workouts/limit`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchRecentWorkoutDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const fetchSelectWorkoutData = workout_id => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const url = `${API_BASE_URL}/workouts/` + workout_id;
    return fetch(`${url}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => ((data[0])))
        .then((data) => dispatch(fetchSelectWorkoutDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
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
            dispatch(fetchProtectedDataError(err));
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
        .then((data) => dispatch(fetchRecentWorkoutDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};
