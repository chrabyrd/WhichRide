export const RECEIVE_START_LOCATION = 'RECEIVE_START_LOCATION';
export const RECEIVE_END_LOCATION = 'RECEIVE_END_LOCATION';

const receiveStartLocation = startLocation => ({
  type: RECEIVE_START_LOCATION,
  startLocation
});

const receiveEndLocation = endLocation => ({
  type: RECEIVE_END_LOCATION,
  endLocation
});

export const getStartLocation = startLocation => dispatch => (
  dispatch(receiveStartLocation(startLocation))
);

export const getEndLocation = endLocation => dispatch => (
  dispatch(receiveEndLocation(endLocation))
);
