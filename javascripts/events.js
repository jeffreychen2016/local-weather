/* eslint camelcase: 0 */
const data = require('./data');
const firebaseAPI = require('./firebaseAPI');
const dom = require('./dom');

const searchWeather = () => {
  $(document).click((e) => {
    if (e.target.id === 'btn-submit') {
      data.getResults(1);
    } else if (e.target.id === 'btn-next-5-days') {
      data.getResults(5);
    } else if (e.target.id === 'btn-next-3-days') {
      data.getResults(3);
    };
  });
};

// get data from the card that being clicked
// then build the object that will be passed into
// if successfully add the movie to database, then remove that movie
const saveWeatherToDBEvent = () => {
  $(document).on('click', '.save-btn', (e) => {
    const weatherWidget = $(e.target).closest('.weather-widgets');
    const weatherToAdd = {
      date: weatherWidget.find('.date').text(),
      temperature: weatherWidget.find('.temperature').text(),
      conditions: weatherWidget.find('.conditions').text(),
      air_pressure: weatherWidget.find('.air-pressure').text(),
      wind_speed: weatherWidget.find('.wind-speed').text(),
      icon: weatherWidget.find('img').data('icon'),
    };

    firebaseAPI.saveWeatherToDB(weatherToAdd)
      .then(() => {
        // display message after add widget to database
        dom.sucessMessage();
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

module.exports = {
  searchWeather,
  saveWeatherToDBEvent,
};
