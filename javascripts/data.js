const dom = require('./dom');

let apiKey = '';
let zipcode = '';

const setKey = (key) => {
  apiKey = key;
};

const setZipcode = () => {
  zipcode = $('#input-zipcode').val();
};

const searchDB = (days) => {
  setZipcode();
  if (days === 1) {
    return new Promise((resolve,reject) => {
      $.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${apiKey}&units=imperial`)
        .done((data) => {
          resolve(data);
        })
        .fail((err) => {
          reject(err);
        });
    });
  } else if (days === 5) {
    return new Promise((resolve,reject) => {
      $.ajax(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&appid=${apiKey}&units=imperial`)
        .done((data) => {
          resolve(data);
        })
        .fail((err) => {
          reject(err);
        });
    });
  } else if (days === 3) {
    return new Promise((resolve,reject) => {
      $.ajax(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&appid=${apiKey}&units=imperial`)
        .done((data) => {
          resolve(data);
        })
        .fail((err) => {
          reject(err);
        });
    });
  };
};

const getResults = (days) => {
  searchDB(days)
    .then((data) => {
      console.log(data);
      dom.printWidgets(data,days);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  setKey,
  getResults,
};
