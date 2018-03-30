import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_WORKOUT_DATA_SUCCESS,
    FETCH_RECENT_WORKOUT_DATA_SUCCESS,
    FETCH_SELECT_WORKOUT_DATA_SUCCESS,
    ADD_WORKOUT_SUCCESS,
    ADD_EXERCISE_SUCCESS,
    ADD_SET_SUCCESS,
    DELETE_WORKOUT_DATA_SUCCESS,
    DELETE_EXERCISE_DATA_SUCCESS,
    DELETE_SET_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
} from '../actions/protected-data';

const initialState = {
    data: '',
    workoutData: '',
    recentWorkoutData: '',
    selectWorkoutData: '',
    addWorkoutData: '',
    addExerciseData: '',
    addSetData: '',
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
    } else if (action.type === ADD_EXERCISE_SUCCESS) {
        return Object.assign({}, state, {
            addExerciseData: action.addExerciseData,
            error: null
        });
    } else if (action.type === ADD_SET_SUCCESS) {
        return Object.assign({}, state, {
            addSetData: action.addSetData,
            error: null
        });
    } else if (action.type === DELETE_WORKOUT_DATA_SUCCESS) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === DELETE_EXERCISE_DATA_SUCCESS) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === DELETE_SET_DATA_SUCCESS) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
