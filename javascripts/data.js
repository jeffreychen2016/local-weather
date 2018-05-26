let apiKey = '';

const setKey = (key) => {
  apiKey = key;
};

const searchDB = () => {
  return new Promise((resolve,reject) => {
    $.ajax(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=imperial`)
      .done((data) => {
        resolve(data);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const getResults = () => {
  searchDB()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  setKey,
  getResults,
};
