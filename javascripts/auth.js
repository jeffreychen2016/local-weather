// monitor state change
const events = require('./events');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      // move it from log in event *******
      $('#savedWeather').removeClass('hide');
      $('#authentication').addClass('hide');
      events.getAllSavedWeather();
    } else {
      // No user is signed in.
      // move it from log out event ------
      $('#authentication').removeClass('hide');
      $('#savedWeather').addClass('hide');
    };
  });
};

module.exports = {
  checkLoginStatus,
};
