const data = require('./data');

// get API keys from JSON file
// set key to a variable when page load
// so the key is ready to be used for any function after page load

const getAPIKeys = () => {
  return new Promise((resolve,reject) => {
    $.ajax('../db/apiKeys.json')
      .done((data) => {
        resolve(data.apiKeys.db.apiKey);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const setKeys = () => {
  getAPIKeys()
    .then((apiKey) => {
      data.setKey(apiKey);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  setKeys,
};
