import * as actions from './constants';

export const updateFormState = (form, state) => ({
  type: actions.LOADED_USER_DATA,
  form,
  payload: state,
  loading: false
});

export const getFormState = (state, form) =>
  (state && state.finalForm && state.finalForm[form]) || {};