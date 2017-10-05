const rp = require('request-promise');
const API_KEY = process.env.TRANSLINK_API_ID;

function handler(message) {
  const getBusesRequest = {
    uri: `http://api.translink.ca/rttiapi/v1/buses\?apikey\=${API_KEY}`,
    headers: { 'Accept': 'application/JSON' },
    json: true,
  }

  return rp(getBusesRequest);
}

module.exports = handler;