import * as actions from './constants';

export function eventReducer(state = {}, action) {
  switch (action.type) {
    case actions.UPDATE_EVENT_FORM:
      return {
        ...state,
        [action.form]: action.payload
      }
    default:
      return state;
  }
}