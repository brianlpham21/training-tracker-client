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

export const ADD_EXERCISE_SUCCESS = 'ADD_EXERCISE_SUCCESS';
export const addExerciseSuccess = addExerciseData => ({
    type: ADD_EXERCISE_SUCCESS,
    addExerciseData
});

export const ADD_SET_SUCCESS = 'ADD_SET_SUCCESS';
export const addSetSuccess = addSetData => ({
    type: ADD_SET_SUCCESS,
    addSetData
});

export const DELETE_WORKOUT_DATA_SUCCESS = 'DELETE_WORKOUT_DATA_SUCCESS';
export const deleteWorkoutDataSuccess = error => ({
    type: DELETE_WORKOUT_DATA_SUCCESS,
    error
});

export const DELETE_EXERCISE_DATA_SUCCESS = 'DELETE_EXERCISE_DATA_SUCCESS';
export const deleteExerciseDataSuccess = error => ({
    type: DELETE_EXERCISE_DATA_SUCCESS,
    error
});

export const DELETE_SET_DATA_SUCCESS = 'DELETE_SET_DATA_SUCCESS';
export const deleteSetDataSuccess = error => ({
    type: DELETE_SET_DATA_SUCCESS,
    error
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
            dispatch(fetchProtectedDataError(err));
        });
};

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
        .then((data) => dispatch(deleteWorkoutDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
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
            dispatch(fetchProtectedDataError(err));
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
            dispatch(fetchProtectedDataError(err));
        });
};
