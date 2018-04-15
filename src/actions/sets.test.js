import {
    ADD_SET_SUCCESS,
    addSetSuccess,
    EDIT_SET_DATA_SUCCESS,
    editSetDataSuccess,
    DELETE_SET_DATA_SUCCESS,
    deleteSetDataSuccess,
    SET_ERROR,
    setError
} from './sets';

describe('addSetSuccess', () => {
    it('Should return the action', () => {
        const title = 'Set Name';
        const action = addSetSuccess(title);
        expect(action.type).toEqual(ADD_SET_SUCCESS);
        expect(action.addSetData).toEqual(title);
    });
});

describe('editSetDataSuccess', () => {
    it('Should return the action', () => {
        const title = 'Set Name';
        const action = editSetDataSuccess(title);
        expect(action.type).toEqual(EDIT_SET_DATA_SUCCESS);
        expect(action.editSetData).toEqual(title);
    });
});

describe('deleteSetDataSuccess', () => {
    it('Should return the action', () => {
        const error = 'Set Name Error';
        const action = deleteSetDataSuccess(error);
        expect(action.type).toEqual(DELETE_SET_DATA_SUCCESS);
        expect(action.error).toEqual(error);
    });
});

describe('setError', () => {
    it('Should return the action', () => {
        const error = 'Set Name Error';
        const action = setError(error);
        expect(action.type).toEqual(SET_ERROR);
        expect(action.error).toEqual(error);
    });
});
