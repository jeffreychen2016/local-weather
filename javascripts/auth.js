// monitor state change
const events = require('./events');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      // move it from log in event *******
      $('#savedWeatherBtn,#searchBtn,#logoutBtn').removeClass('hide');
      $('#authBtn').addClass('hide');

      $('#savedWeather').removeClass('hide');
      $('#authentication').addClass('hide');
      events.getAllSavedWeather();
    } else {
      // No user is signed in.
      // move it from log out event ------
      $('#savedWeatherBtn,#searchBtn,#logoutBtn').addClass('hide');
      $('#authBtn').removeClass('hide');

      $('#authentication').removeClass('hide');
      $('#savedWeather').addClass('hide');
    };
  });
};

module.exports = {
  checkLoginStatus,
};
