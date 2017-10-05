const rp = require('request-promise');
const API_KEY = process.env.TRANSLINK_API_ID;

function handler() {
  return requestBusesFromTranslink().then(transformTranslinkResponse);
}

function requestBusesFromTranslink() {
  const getBusesRequest = {
    uri: `http://api.translink.ca/rttiapi/v1/buses\?apikey\=${API_KEY}`,
    headers: { 'Accept': 'application/JSON' },
    json: true,
    method: 'GET',
  }

  return rp(getBusesRequest);
}

function transformTranslinkResponse(response) {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: response,
  }
}

module.exports = handler;

// Debugging code
// handler().then((response) => {
//   console.log(response);
// })