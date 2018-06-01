let firebaseConfig = {};

// get databaseURL from API JSON file for posting data
const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

// POST
// newMovie: get the movie info that needs to add to the database
// then post the data to database
// then database return the unique key for data that are posted
const saveWeatherToDB = (weatherToAdd) => {
  return new Promise((resolve,reject) => {
    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.databaseURL}/weather.json`,
      data: JSON.stringify(weatherToAdd),
    })
      .done((uniqueKey) => {
        resolve(uniqueKey);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

module.exports = {
  setConfig,
  saveWeatherToDB,
};
