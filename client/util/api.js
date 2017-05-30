export const getIPData = () => (
  fetch('http://ip-api.com/json', {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  })
);

export const getUberEstimate = (startLat, startLon, endLat, endLon) => (
  fetch(`https://api.uber.com/v1/estimates/price?start_latitude=${startLat}&start_longitude=${startLon}&end_latitude=${endLat}&end_longitude=${endLon}`, {
    method: 'get',
    headers: {
      'Authorization': 'Token BiUDtBvErg2NZG7SRmzWvwUHSgsfnmUxwWCOuL03',
      'Accept-Language': 'en_US',
      'Content-Type': 'application/json'
    }
  })
);
