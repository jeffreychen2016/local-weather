const data = require('./data');
const firebaseAPI = require('./firebaseAPI');

// get API keys from JSON file
// set key to a variable when page load
// so the key is ready to be used for any function after page load

const getAPIKeys = () => {
  return new Promise((resolve,reject) => {
    $.ajax('../db/apiKeys.json')
      .done((data) => {
        resolve(data.apiKeys);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const setKeys = () => {
  getAPIKeys()
    .then((apiKeys) => {
      data.setKey(apiKeys.weatherDB.apiKey);
      firebaseAPI.setConfig(apiKeys.firebaseDB);
      firebase.initializeApp(apiKeys.firebaseDB);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  setKeys,
};
