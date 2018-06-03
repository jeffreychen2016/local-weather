const events = require('./events');
const apiKeys = require('./apiKeys');

const initializer = () => {
  events.navPageEvent();
  apiKeys.setKeys();
  events.searchWeather();
  events.saveWeatherToDBEvent();
  events.getAllWeatherFromDBEvent();
  events.deleteWeatherInDBEvent();
};

initializer();
