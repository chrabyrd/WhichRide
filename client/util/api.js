export const getIPData = () => (
  fetch('http://ip-api.com/json', {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  })
);
