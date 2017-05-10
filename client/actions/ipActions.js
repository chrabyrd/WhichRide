import { getIPData } from '../util/api.js';

export const RECEIVE_IPDATA = 'RECEIVE_IPDATA';

const receiveIPData = ipData => ({
  type: RECEIVE_IPDATA,
  ipData
});

export const fetchIPData = ipAddress => dispatch => (
  getIPData(ipAddress)
  .then(ipData => ipData.json())
  .then(ipData => console.log(ipData))
);
