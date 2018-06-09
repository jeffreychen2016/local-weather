let firebaseConfig = {};
let uid = '';

const setUid = (userId) => {
  uid = userId;
};

// get databaseURL from API JSON file for posting data
const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

// POST
// newMovie: get the movie info that needs to add to the database
// then post the data to database
// then database return the unique key for data that are posted
const saveWeatherToDB = (weatherToAdd) => {
  weatherToAdd.uid = uid;

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

// GET
const getAllWeatherFromDB = () => {
  return new Promise((resolve,reject) => {
    const allWeatherArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/weather.json?orderBy="uid"&equalTo="${uid}"`,
    })
      .done((allWeather) => {
        if (allWeather !== null) {
          Object.keys(allWeather).forEach((fbKey) => {
            allWeather[fbKey].id = fbKey;
            allWeatherArray.push(allWeather[fbKey]);
          });
        };
        resolve(allWeatherArray);
      })
      .fail((err) => {
        console.error(err);
      });
  });
};

// DELETE
const deleteWeatherInDB = (weatherId) => {
  return new Promise((resolve,reject) => {
    $.ajax({
      method: 'DELETE',
      url: `${firebaseConfig.databaseURL}/weather/${weatherId}.json`,
    })
      .done(() => {
        resolve();
      })
      .fail((err) => {
        reject(err);
      });
  });
};

// UPDATE
const updateWeatherInDB = (updatedWeather,weatherId) => {
  updatedWeather.uid = uid;
  return new Promise((resolve,reject) => {
    $.ajax({
      method: 'PUT',
      url: `${firebaseConfig.databaseURL}/weather/${weatherId}.json`,
      data: JSON.stringify(updatedWeather),
    })
      .done(() => {
        resolve();
      })
      .fail((err) => {
        reject(err);
      });
  });
};

module.exports = {
  setConfig,
  saveWeatherToDB,
  getAllWeatherFromDB,
  deleteWeatherInDB,
  updateWeatherInDB,
  setUid,
};
