import {
    ADD_SET_SUCCESS,
    EDIT_SET_DATA_SUCCESS,
    DELETE_SET_DATA_SUCCESS,
    SET_ERROR,
} from '../actions/sets';

const initialState = {
    addSetData: '',
    editSetData: '',
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === ADD_SET_SUCCESS) {
        return Object.assign({}, state, {
            addSetData: action.addSetData,
            error: null
        });
    } else if (action.type === EDIT_SET_DATA_SUCCESS) {
        return Object.assign({}, state, {
            editSetData: action.editSetData,
            error: action.error
        });
    } else if (action.type === DELETE_SET_DATA_SUCCESS) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === SET_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
