import {
    FETCH_WORKOUT_DATA_SUCCESS,
    FETCH_SELECT_WORKOUT_DATA_SUCCESS,
    ADD_WORKOUT_SUCCESS,
    EDIT_WORKOUT_SUCCESS,
    DELETE_WORKOUT_DATA_SUCCESS,
    CLEAR_WORKOUT_DATA,
    WORKOUT_ERROR,
} from '../actions/workouts';

const initialState = {
    workoutData: '',
    selectWorkoutData: '',
    addWorkoutData: '',
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_WORKOUT_DATA_SUCCESS) {
        return Object.assign({}, state, {
            workoutData: action.workoutData,
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
    } else if (action.type === EDIT_WORKOUT_SUCCESS) {
        return Object.assign({}, state, {
            editWorkoutData: action.editWorkoutData,
            error: null
        });
    } else if (action.type === DELETE_WORKOUT_DATA_SUCCESS) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === CLEAR_WORKOUT_DATA) {
        return Object.assign({}, state, {
            selectWorkoutData: ''
        })
    } else if (action.type === WORKOUT_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
