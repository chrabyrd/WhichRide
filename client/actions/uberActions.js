import { getUberEstimate } from '../util/api.js';

export const RECEIVE_UBER_ESTIMATES = "RECEIVE_UBER_ESTIMATES";

const receiveUberEstimates = estimates => ({
  type: RECEIVE_UBER_ESTIMATES,
  estimates
})

export const fetchUberEstimates = (startLat, startLon, endLat, endLon) => dispatch => (
  getUberEstimate(startLat, startLon, endLat, endLon)
    .then(data => data.json())
    .then(estimates => dispatch(receiveUberEstimates(estimates)))
)
