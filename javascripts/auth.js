// monitor state change
const events = require('./events');
const firebaseAPI = require('./firebaseAPI');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // set user id after user object gets returned
      firebaseAPI.setUid(user.uid);
      // User is signed in.
      // move it from log in event *******
      $('#savedWeatherBtn,#searchBtn,#logoutBtn').removeClass('hide');
      $('#authBtn').addClass('hide');

      $('#savedWeather').removeClass('hide');
      $('#authentication').addClass('hide');
      $('#search').addClass('hide');
      events.getAllSavedWeather();
    } else {
      // No user is signed in.
      // move it from log out event ------
      $('#savedWeatherBtn,#searchBtn,#logoutBtn').addClass('hide');
      $('#authBtn').removeClass('hide');

      $('#authentication').removeClass('hide');
      $('#savedWeather').addClass('hide');
      $('#search').addClass('hide');
    };
  });
};

module.exports = {
  checkLoginStatus,
};
