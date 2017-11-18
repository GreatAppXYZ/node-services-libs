const fetch = require('node-fetch');
const port = process.env.PORT || 3000;
const baseUrl = 'http://localhost:' + port;
let lastResponse;

function get(path, callback) {
  const url = baseUrl + path;
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

function post(path, body, callback) {
  const url = baseUrl + path;
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
