const dom = require('./dom');
const zipcodeValidation = require('./zipcodeValidation');

let apiKey = '';

const setKey = (key) => {
  apiKey = key;
};

const searchDB = (days,zipcode) => {
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
  } else if (days === 5 || days === 3) {
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
  const zipcode = zipcodeValidation.validateZipcode();
  if (zipcode) {
    searchDB(days,zipcode)
      .then((data) => {
        zipcodeValidation.removeInvalidZipError();
        dom.printWidgets(data,days);
      })
      .catch((err) => {
        // display error when bad request
        // zipcodeValidation.displayError();
        console.log(err);
      });
  } else {
    dom.removeWidgets();
    zipcodeValidation.displayInvalidZipError();
  };
};

module.exports = {
  setKey,
  getResults,
};
