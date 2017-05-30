import { RECEIVE_UBER_ESTIMATES } from '../actions/uberActions.js';
import merge from 'lodash/merge';

export const uberReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_UBER_ESTIMATES:
      return merge({}, state, action.estimates);
    default:
      return state;
  }
};
