import {
    ADD_EXERCISE_SUCCESS,
    addExerciseSuccess,
    EDIT_EXERCISE_DATA_SUCCESS,
    editExerciseDataSuccess,
    DELETE_EXERCISE_DATA_SUCCESS,
    deleteExerciseDataSuccess,
    EXERCISE_ERROR,
    exerciseError
} from './exercises';

describe('addExerciseSuccess', () => {
    it('Should return the action', () => {
        const title = 'Exercise Name';
        const action = addExerciseSuccess(title);
        expect(action.type).toEqual(ADD_EXERCISE_SUCCESS);
        expect(action.addExerciseData).toEqual(title);
    });
});

describe('editExerciseDataSuccess', () => {
    it('Should return the action', () => {
        const title = 'Exercise Name';
        const action = editExerciseDataSuccess(title);
        expect(action.type).toEqual(EDIT_EXERCISE_DATA_SUCCESS);
        expect(action.editExerciseData).toEqual(title);
    });
});

describe('deleteExerciseDataSuccess', () => {
    it('Should return the action', () => {
        const error = 'Exercise Delete Error';
        const action = deleteExerciseDataSuccess(error);
        expect(action.type).toEqual(DELETE_EXERCISE_DATA_SUCCESS);
        expect(action.error).toEqual(error);
    });
});

describe('exerciseError', () => {
    it('Should return the action', () => {
        const error = 'Exercise Error';
        const action = exerciseError(error);
        expect(action.type).toEqual(EXERCISE_ERROR);
        expect(action.error).toEqual(error);
    });
});
