const data = require('./data');

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

module.exports = {
  searchWeather,
};
