import * as actions from "./constants";

export const updateFormState = (form, state) => ({
  type: actions.UPDATE_EVENT_FORM,
  form,
  payload: state,
});

export const getFormState = (state, form) =>
  (state && state.finalForm && state.finalForm[form]) || {};