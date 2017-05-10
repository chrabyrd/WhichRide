import { RECEIVE_IPDATA } from '../actions/ipActions.js';
import merge from 'lodash/merge';

export const ipDataReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_IPDATA:
      return merge({}, state, action.ipData);
    default:
      return state;
  }
};
