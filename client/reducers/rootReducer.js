import { combineReducers } from 'redux';
import { ipDataReducer } from './ipDataReducer.js';
import { locationReducer } from './locationReducer.js';

export default combineReducers({
  ipData: ipDataReducer,
  location: locationReducer,
});
