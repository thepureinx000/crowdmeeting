import * as actions from './constants';

export function userReducer(state = {}, action) {
  switch (action.type) {
    case actions.LOADED_USER_DATA:
      return {
        ...state,
        [action.form]: action.payload
      }
    default:
      return state;
  }
}