const fetch = require('node-fetch');
let lastResponse;

function get(url, callback) {
  fetch(url).then((res) => {
     res.json().then((body) => {
        lastResponse = {
          status: res.status,
          headers: res.headers.raw(),
          body: body
        };
        callback();
    }).catch((err) => {
      callback(err);
    });
  }).catch((err) => {
    callback(err);
  });
}

function post(url, body, callback) {
  let info = {
      method: 'POST',
      headers: {"Content-Type": "application/json"}
    };
  fetch(url, info).then((res) => {
     res.json().then((body) => {
        lastResponse = {
          status: res.status,
          headers: res.headers.raw(),
          body: body
        };
        callback();
    }).catch((err) => {
      callback(err);
    });
  }).catch((err) => {
    callback(err);
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
