import {
    ADD_EXERCISE_SUCCESS,
    DELETE_EXERCISE_DATA_SUCCESS,
    EXERCISE_ERROR,
} from '../actions/exercises';

const initialState = {
    addExerciseData: '',
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === ADD_EXERCISE_SUCCESS) {
        console.log(action.addExerciseData);
        return Object.assign({}, state, {
            addExerciseData: action.addExerciseData,
            error: null
        });
    } else if (action.type === DELETE_EXERCISE_DATA_SUCCESS) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === EXERCISE_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
