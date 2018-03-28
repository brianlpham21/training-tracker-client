import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_WORKOUT_DATA_SUCCESS,
    FETCH_RECENT_WORKOUT_DATA_SUCCESS,
    FETCH_SELECT_WORKOUT_DATA_SUCCESS,
    ADD_WORKOUT_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
} from '../actions/protected-data';

const initialState = {
    data: '',
    workoutData: '',
    recentWorkoutData: '',
    selectWorkoutData: '',
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_WORKOUT_DATA_SUCCESS) {
        return Object.assign({}, state, {
            workoutData: action.workoutData,
            error: null
        });
    } else if (action.type === FETCH_RECENT_WORKOUT_DATA_SUCCESS) {
        return Object.assign({}, state, {
            recentWorkoutData: action.recentWorkoutData,
            error: null
        });
    } else if (action.type === FETCH_SELECT_WORKOUT_DATA_SUCCESS) {
        return Object.assign({}, state, {
            selectWorkoutData: action.selectWorkoutData,
            error: null
        });
    } else if (action.type === ADD_WORKOUT_SUCCESS) {
        return Object.assign({}, state, {
            addWorkoutData: action.addWorkoutData,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
