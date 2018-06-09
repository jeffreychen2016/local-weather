/* eslint camelcase: 0 */
const data = require('./data');
const firebaseAPI = require('./firebaseAPI');
const dom = require('./dom');

const navPageEvent = () => {
  $(document).on('click', (e) => {
    if (e.target.id === 'authBtn') {
      $('#authentication').removeClass('hide');
      $('#savedWeather').addClass('hide');
      $('#search').addClass('hide');
    } else if (e.target.id === 'savedWeatherBtn') {
      $('#authentication').addClass('hide');
      $('#savedWeather').removeClass('hide');
      $('#search').addClass('hide');
    } else if (e.target.id === 'searchBtn') {
      $('#authentication').addClass('hide');
      $('#savedWeather').addClass('hide');
      $('#search').removeClass('hide');
    };
  });
};

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

// POST
// get data from the card that being clicked
// then build the object that will be passed into
// if successfully add the movie to database, then remove that movie
const saveWeatherToDBEvent = () => {
  $(document).on('click', '.save-btn', (e) => {
    const weatherWidget = $(e.target).closest('.weather-widgets');
    const weatherToAdd = {
      city: weatherWidget.find('.city').data('city'),
      date: weatherWidget.find('.date').data('date'),
      temperature: weatherWidget.find('.temperature').data('temp'),
      conditions: weatherWidget.find('.conditions').data('cond'),
      air_pressure: weatherWidget.find('.air-pressure').data('pressure'),
      wind_speed: weatherWidget.find('.wind-speed').data('speed'),
      icon: weatherWidget.find('img').data('icon'),
      isScary: false,
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

// GET
const getAllSavedWeather = () => {
  firebaseAPI.getAllWeatherFromDB()
    .then((weatherData) => {
      dom.printSavedWidgets(weatherData);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getAllWeatherFromDBEvent = () => {
  $(document).on('click','#savedWeatherBtn', () => {
    getAllSavedWeather();
  });
};

// DELETE
const deleteWeatherInDBEvent = () => {
  $(document).on('click','.delete-btn', (e) => {
    const weatherToDeleteId = $(e.target).closest('.thumbnail').data('firebaseId');
    firebaseAPI.deleteWeatherInDB(weatherToDeleteId)
      .then(() => {
        getAllSavedWeather();
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

// UPDATE
const updateWeatherInDBEvent = () => {
  $(document).on('click','.scary-btn', (e) => {
    const weatherToDeleteId = $(e.target).closest('.thumbnail').data('firebaseId');
    const weatherWidget = $(e.target).closest('.weather-widgets');
    let isScaryUpdate = false;
    if (weatherWidget.find('.scary-btn').data('updateScary')) {
      isScaryUpdate = false;
    } else {
      isScaryUpdate = true;
    };
    const weatherToUpdate = {
      date: weatherWidget.find('.date').data('date'),
      temperature: weatherWidget.find('.temperature').data('temp'),
      conditions: weatherWidget.find('.conditions').data('cond'),
      air_pressure: weatherWidget.find('.air-pressure').data('pressure'),
      wind_speed: weatherWidget.find('.wind-speed').data('speed'),
      icon: weatherWidget.find('img').data('icon'),
      isScary: isScaryUpdate,
    };
    firebaseAPI.updateWeatherInDB(weatherToUpdate,weatherToDeleteId)
      .then(() => {
        getAllSavedWeather();
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

const authEvents = () => {
  // switch to registration page
  $('#register-link').click((e) => {
    $('#login-form').addClass('hide');
    $('#registration-form').removeClass('hide');
  });

  // switch to log in page
  $('#signin-link').click((e) => {
    $('#login-form').removeClass('hide');
    $('#registration-form').addClass('hide');
  });

  // register account
  $('#register-btn').click(() => {
    const email = $('#registerEmail').val();
    const pass = $('#registerPassword').val();
    firebase.auth().createUserWithEmailAndPassword(email, pass)
      .then(() => {
      })
      .catch((error) => {
        // Handle Errors here.
        // var errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
        // ...
      });
  });

  // login
  $('#signin-btn').click((e) => {
    e.preventDefault();

    const email = $('#inputEmail').val();
    const pass = $('#inputPassword').val();
    // calling auth services of firebase
    // pass in email and password
    // firebase will return a promise
    firebase.auth().signInWithEmailAndPassword(email, pass)
      // not using returned user object
      // do not need .then here since it is managed by the auth state changing
      // in checkLoginStatus *******
      .then((user) => {
        // Sign-in successful.
        // move this code to auth module -------
      })
      .catch((error) => {
        // Handle Errors here. When get error on sign-in
        // var errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
        // ...
      });
  });

  $('#logoutBtn').click((e) => {
    firebase.auth().signOut()
      .then(() => {
        // Sign-out successful.
        // move this code to auth module -------
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

module.exports = {
  searchWeather,
  saveWeatherToDBEvent,
  navPageEvent,
  getAllWeatherFromDBEvent,
  getAllSavedWeather,
  deleteWeatherInDBEvent,
  updateWeatherInDBEvent,
  authEvents,
};
