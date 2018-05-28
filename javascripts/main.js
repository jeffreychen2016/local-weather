const events = require('./events');
const apiKeys = require('./apiKeys');

const initializer = () => {
  apiKeys.setKeys();
  events.searchWeather();
};

initializer();
