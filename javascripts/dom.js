/* eslint no-undef: 0 */
const moment = require('../lib/node_modules/moment');

const sucessMessage = () => {
  let string = '';
  string += '<div class="alert alert-success margin-top" role="alert" id="success-msg">The weather widget was saved correctly.</div>';
  $(string).appendTo('#zipcode-input-section').hide().fadeIn(600);
  window.setTimeout(() => {
    $('#success-msg').fadeOut(1000).remove();
  }, 2000);
};

const printWidgets = (weatherData,days) => {
  let strang = '';

  if (days === 1) {
    // remove all widgets each time re-submit the zipcode
    // then re-print new widgets
    // so users do not get same widget more than 1 time
    $('.weahter-widgets-row').remove();
    strang += `<div class="row margin-top weather-widgets-current-day-row weahter-widgets-row">`;
    strang += `<div class="col-sm-6 col-md-4 col-md-offset-4 weathercard-current-day weather-widgets">`;
    strang += `  <div class="thumbnail">`;
    strang += `    <a class="btn btn-primary save-btn" role="button" >Save</a>`;
    strang += `    <img src="http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png" data-icon="${weatherData.weather[0].icon}" alt="...">`;
    strang += `    <div class="caption">`;
    strang += `      <h3>${moment().format('MMMM DD, YYYY')}</h3>`;
    strang += `      <p class='date'>Temperature:${weatherData.main.temp}</p>`;
    strang += `      <p class='temperature'>Conditions:${weatherData.weather[0].description}</p>`;
    strang += `      <p class='conditions'>Air pressure:${weatherData.wind.speed}</p>`;
    strang += `      <p class='wind-speed'>Wind speed:${weatherData.main.pressure}</p>`;
    strang += `      <p><a class="btn btn-primary" role="button" id="btn-next-3-days">Next 3 Days</a> <a href="#" class="btn btn-default" role="button" id="btn-next-5-days">Next 5 Days</a></p>`;
    strang += `    </div>`;
    strang += `  </div>`;
    strang += `</div>`;
  } else if (days !== 1) {
    // remove all widgets that are not current day widget
    // then re-print widgets for either 3 days or 5 days to avoid appending empty row
    $('.weather-widgets-not-current-day-row').remove();

    strang += `<div class="row margin-top weather-widgets-not-current-day-row weahter-widgets-row">`;
    weatherData.list.forEach((weather) => {
      const hour = weather.dt_txt.slice(11,13);
      if (hour === '12') {
        strang += `<div class="col-sm-6 col-md-4 weathercard-other-than-current-day weather-widgets">`;
        strang += `  <div class="thumbnail">`;
        strang += `    <a class="btn btn-primary save-btn" role="button" >Save</a>`;
        strang += `    <img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png" data-icon="${weather.weather[0].icon}" alt="...">`;
        strang += `    <div class="caption">`;
        strang += `      <h3 class='date'>${moment(weather.dt_txt).format('dddd MMMM DD, YYYY')}</h3>`;
        strang += `      <p class='temperature'>Temperature:${weather.main.temp}</p>`;
        strang += `      <p class='conditions'>Conditions:${weather.weather[0].description}</p>`;
        strang += `      <p class='air-pressure'>Air pressure:${weather.main.pressure}</p>`;
        strang += `      <p class='wind-speed'>Wind speed:${weather.wind.speed}</p>`;
        strang += `    </div>`;
        strang += `  </div>`;
        strang += `</div>`;
      };
    });
  };
  strang += `</div>`;

  // append all 5 cards to the DOM, then remove last 2
  $(strang).appendTo('#weather-card').hide().fadeIn(600);
  $(`.weathercard-other-than-current-day:gt(${days - 1})`).remove();
};

const printSavedWidgets = (savedData) => {
  $('#savedWeather').html('');
  let strang = '';
  strang += `<div class="row margin-top weather-widgets-not-current-day-row weahter-widgets-row">`;
  savedData.forEach((weather) => {
    strang += `<div class="col-sm-6 col-md-4 weathercard-other-than-current-day weather-widgets">`;
    strang += `  <div class="thumbnail" data-firebase-id="${weather.id}">`;
    strang += `    <a class="btn btn-primary delete-btn" role="button">Delete</a>`;
    strang += `    <img src="http://openweathermap.org/img/w/${weather.icon}.png" data-icon="${weather.icon}" alt="...">`;
    strang += `    <div class="caption">`;
    strang += `      <h3 class='date'>${weather.date}</h3>`;
    strang += `      <p class='temperature'>Temperature:${weather.temperature}</p>`;
    strang += `      <p class='conditions'>Conditions:${weather.conditions}</p>`;
    strang += `      <p class='air-pressure'>Air pressure:${weather.air_pressure}</p>`;
    strang += `      <p class='wind-speed'>Wind speed:${weather.wind_speed}</p>`;
    strang += `    </div>`;
    strang += `  </div>`;
    strang += `</div>`;
  });
  strang += `</div>`;

  $(strang).appendTo('#savedWeather').hide().fadeIn(600);
};

const removeWidgets = () => {
  $('.weather-widgets-row').remove();
};

module.exports = {
  printWidgets,
  removeWidgets,
  sucessMessage,
  printSavedWidgets,
};
