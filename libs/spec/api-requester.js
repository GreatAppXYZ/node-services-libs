const fetch = require('node-fetch');
let lastResponse;

function get(url) {
  return fetch(url).then((res) => {
     return res.json().then((body) => {
        return lastResponse = {
          status: res.status,
          headers: res.headers.raw(),
          body: body
        };
    });
  });
}

function post(url, body) {
  let info = {
      method: 'POST',
      headers: {"Content-Type": "application/json"}
    };
  return fetch(url, info).then((res) => {
     return res.json().then((body) => {
        return lastResponse = {
          status: res.status,
          headers: res.headers.raw(),
          body: body
        };
    });
  });
}

function getLastResponse() {
  return lastResponse;
}

module.exports = {
  get: get,
  post: post,
  getLastResponse: getLastResponse
};
