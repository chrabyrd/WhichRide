import { RECEIVE_START_LOCATION, RECEIVE_END_LOCATION } from '../actions/locationActions.js';
import merge from 'lodash/merge';

export const locationReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_START_LOCATION:
      return merge({}, state, {startLocation: action.startLocation});
    case RECEIVE_END_LOCATION:
      return merge({}, state, {endLocation: action.endLocation});
    default:
      return state;
  }
};
