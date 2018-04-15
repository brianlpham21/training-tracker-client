import {
  FETCH_WORKOUT_DATA_SUCCESS,
  fetchWorkoutDataSuccess,
  ADD_WORKOUT_SUCCESS,
  addWorkoutSuccess,
  EDIT_WORKOUT_SUCCESS,
  editWorkoutSuccess,
  DELETE_WORKOUT_DATA_SUCCESS,
  deleteWorkoutDataSuccess,
  WORKOUT_ERROR,
  workoutError
} from './workouts';

describe('fetchWorkoutDataSuccess', () => {
    it('Should return the action', () => {
        const title = 'Workout Data';
        const action = fetchWorkoutDataSuccess(title);
        expect(action.type).toEqual(FETCH_WORKOUT_DATA_SUCCESS);
        expect(action.workoutData).toEqual(title);
    });
});

describe('addWorkoutSuccess', () => {
    it('Should return the action', () => {
        const title = 'Workout Data';
        const action = addWorkoutSuccess(title);
        expect(action.type).toEqual(ADD_WORKOUT_SUCCESS);
        expect(action.addWorkoutData).toEqual(title);
    });
});

describe('editWorkoutSuccess', () => {
    it('Should return the action', () => {
        const title = 'Workout Data';
        const action = editWorkoutSuccess(title);
        expect(action.type).toEqual(EDIT_WORKOUT_SUCCESS);
        expect(action.editWorkoutData).toEqual(title);
    });
});

describe('deleteWorkoutDataSuccess', () => {
    it('Should return the action', () => {
        const error = 'Workout Data Error';
        const action = deleteWorkoutDataSuccess(error);
        expect(action.type).toEqual(DELETE_WORKOUT_DATA_SUCCESS);
        expect(action.error).toEqual(error);
    });
});

describe('workoutError', () => {
    it('Should return the action', () => {
        const error = 'Exercise Error';
        const action = workoutError(error);
        expect(action.type).toEqual(WORKOUT_ERROR);
        expect(action.error).toEqual(error);
    });
});
