import { combineReducers } from 'redux';
import { ipDataReducer } from './ipDataReducer.js';
import { locationReducer } from './locationReducer.js';
import { uberReducer } from './uberReducer.js';

export default combineReducers({
  ipData: ipDataReducer,
  location: locationReducer,
  uberEstimates: uberReducer
});
