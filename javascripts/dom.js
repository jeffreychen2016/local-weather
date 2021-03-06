/* eslint no-undef: 0 */
const moment = require('../lib/node_modules/moment');

// on 5 days API, there is no city info
// so get city info from one day API, then store it for using in 5 days DOM function
let city = '';

const sucessMessage = (e) => {
  const savedId = $(e.target).closest('.thumbnail').data('save-id');
  let string = '';
  string += '<div class="alert alert-success margin-top success-msg" role="alert">The weather widget was saved successfully.</div>';
  $(string).appendTo(`[data-save-id=${savedId}]`).hide().fadeIn(600);
  window.setTimeout(() => {
    $('.success-msg').fadeOut(1000).remove();
  }, 2000);
};

const printWidgets = (weatherData,days) => {
  let strang = '';

  if (days === 1) {
    // remove all widgets each time re-submit the zipcode
    // then re-print new widgets
    // so users do not get same widget more than 1 time
    city = weatherData.name;
    const temp = Math.floor(weatherData.main.temp);

    $('.weahter-widgets-row').remove();
    strang += `<div class="row margin-top weather-widgets-current-day-row weahter-widgets-row">`;
    strang += `<div class="col-sm-6 col-md-4 col-md-offset-4 weathercard-current-day weather-widgets">`;
    strang += `  <div class="thumbnail" data-save-id='${1}'>`;
    strang += `    <img class='weather-icon' src="https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png" data-icon="${weatherData.weather[0].icon}" alt="...">`;
    strang += `    <div class="caption">`;
    strang += `     <div class="widget-header">`;
    strang += `       <div class='city' data-city='${city}'>${city}</div>`;
    strang += `       <div class='conditions' data-cond='${weatherData.weather[0].description}'>${weatherData.weather[0].description}</div>`;
    strang += `     </div>`;
    strang += `     <div class="widget-body">`;
    strang += `       <div class="widget-left-col align-middle">`;
    strang += `         <div class='temperature' data-temp='${temp}'>${temp}°F</div>`;
    strang += `       </div>`;
    strang += `       <table class="widget-right-col">`;
    strang += `         <tr class='details-row'>`;
    strang += `           <td>Details:</td>`;
    strang += `           <td></td>`;
    strang += `         </tr>`;
    strang += `         <tr>`;
    strang += `           <td>Feels Like:</td>`;
    strang += `           <td class='feels-like' data-feels-like='${temp}'>${temp}°F</td>`;
    strang += `         </tr>`;
    strang += `         <tr>`;
    strang += `           <td>Air pressure:</td>`;
    strang += `           <td class='air-pressure' data-pressure='${weatherData.main.pressure}'>${weatherData.main.pressure} hPa</td>`;
    strang += `         </tr>`;
    strang += `         <tr>`;
    strang += `           <td>Wind speed:</td>`;
    strang += `           <td class='wind-speed' data-speed='${weatherData.wind.speed}'>${weatherData.wind.speed} m/h</td>`;
    strang += `         </tr>`;
    strang += `         <tr>`;
    strang += `           <td>Humidity:</td>`;
    strang += `           <td class='humidity' data-humidity='${weatherData.main.humidity}'>${weatherData.main.humidity}%</td>`;
    strang += `         </tr>`;
    strang += `       </table>`;
    strang += `     </div>`;
    strang += `     <div class='db-button-group'><p class='text-center'><a class="btn btn-primary" role="button" id="btn-next-3-days">Next 3 Days</a> <a class="btn btn-primary" role="button" id="btn-next-5-days">Next 5 Days</a><a class="btn btn-primary save-btn" role="button" >Save</a></p></div>`;
    strang += `     <div class='date' data-date='${moment().format('dddd MMMM DD, YYYY')}'>${moment().format('dddd MMMM DD, YYYY')}</div>`;;
    strang += `    </div>`;
    strang += `  </div>`;
    strang += `</div>`;
  } else if (days !== 1) {
    // remove all widgets that are not current day widget
    // then re-print widgets for either 3 days or 5 days to avoid appending empty row
    $('.weather-widgets-not-current-day-row').remove();
    strang += `<div class="row margin-top weather-widgets-not-current-day-row weahter-widgets-row">`;
    weatherData.list.forEach((weather,i) => {
      const hour = weather.dt_txt.slice(11,13);
      if (hour === '12') {
        const temp = Math.floor(weather.main.temp);
        strang += `<div class="col-sm-6 col-md-4 weathercard-other-than-current-day weather-widgets">`;
        strang += `  <div class="thumbnail" data-save-id='${i + 1}'>`;
        strang += `    <img class='weather-icon' src="https://openweathermap.org/img/w/${weather.weather[0].icon}.png" data-icon="${weather.weather[0].icon}" alt="...">`;
        strang += `    <div class="caption">`;
        strang += `     <div class="widget-header">`;
        strang += `       <div class='city' data-city='${city}'>${city}</div>`;
        strang += `       <div class='conditions' data-cond='${weather.weather[0].description}'>${weather.weather[0].description}</div>`;
        strang += `     </div>`;
        strang += `     <div class="widget-body">`;
        strang += `       <div class="widget-left-col align-middle">`;
        strang += `         <div class='temperature' data-temp='${temp}'>${temp}°F</div>`;
        strang += `       </div>`;
        strang += `       <table class="widget-right-col">`;
        strang += `         <tr class='details-row'>`;
        strang += `           <td>Details:</td>`;
        strang += `           <td></td>`;
        strang += `         </tr>`;
        strang += `         <tr>`;
        strang += `           <td>Feels Like:</td>`;
        strang += `           <td class='feels-like' data-feels-like='${temp}'>${temp}°F</td>`;
        strang += `         </tr>`;
        strang += `         <tr>`;
        strang += `           <td>Air pressure:</td>`;
        strang += `           <td class='air-pressure' data-pressure='${weather.main.pressure}'>${weather.main.pressure} hPa</td>`;
        strang += `         </tr>`;
        strang += `         <tr>`;
        strang += `           <td>Wind speed:</td>`;
        strang += `           <td class='wind-speed' data-speed='${weather.wind.speed}'>${weather.wind.speed} m/h</td>`;
        strang += `         </tr>`;
        strang += `         <tr>`;
        strang += `           <td>Humidity:</td>`;
        strang += `           <td class='humidity' data-humidity='${weather.main.humidity}'>${weather.main.humidity}%</td>`;
        strang += `         </tr>`;
        strang += `       </table>`;
        strang += `     </div>`;
        strang += `     <div class='db-button-group'><a class="btn btn-primary save-btn" role="button">Save</a></p></div>`;
        strang += `     <div class='date' data-date='${moment(weather.dt_txt).format('dddd MMMM DD, YYYY')}'>${moment(weather.dt_txt).format('dddd MMMM DD, YYYY')}</div>`;;
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
  $('#savedWeather-container').html('');
  let strang = '';
  strang += `<div class="row margin-top weather-widgets-not-current-day-row weahter-widgets-row">`;
  savedData.forEach((weather) => {
    strang += `<div class="col-sm-6 col-md-4 weathercard-other-than-current-day weather-widgets">`;
    if (weather.isScary) {
      strang += `  <div class="thumbnail scary" data-firebase-id="${weather.id}">`;
    } else {
      strang += `  <div class="thumbnail not-scary" data-firebase-id="${weather.id}">`;
    };
    strang += `    <img class='weather-icon' src="https://openweathermap.org/img/w/${weather.icon}.png" data-icon="${weather.icon}" alt="...">`;
    strang += `    <div class="caption">`;
    strang += `     <div class="widget-header">`;
    strang += `       <div class='city' data-city='${weather.city}'>${weather.city}</div>`;
    strang += `       <div class='conditions' data-cond='${weather.conditions}'>${weather.conditions}</div>`;
    strang += `     </div>`;
    strang += `     <div class="widget-body">`;
    strang += `       <div class="widget-left-col align-middle">`;
    strang += `         <div class='temperature' data-temp='${weather.temperature}'>${weather.temperature}°F</div>`;
    strang += `       </div>`;
    strang += `       <table class="widget-right-col">`;
    strang += `         <tr class='details-row'>`;
    strang += `           <td>Details:</td>`;
    strang += `           <td></td>`;
    strang += `         </tr>`;
    strang += `         <tr>`;
    strang += `           <td>Feels Like:</td>`;
    strang += `           <td class='feels-like' data-feels-like='${weather.temperature}'>${weather.temperature}°F</td>`;
    strang += `         </tr>`;
    strang += `         <tr>`;
    strang += `           <td>Air pressure:</td>`;
    strang += `           <td class='air-pressure' data-pressure='${weather.air_pressure}'>${weather.air_pressure} hPa</td>`;
    strang += `         </tr>`;
    strang += `         <tr>`;
    strang += `           <td>Wind speed:</td>`;
    strang += `           <td class='wind-speed' data-speed='${weather.wind_speed}'>${weather.wind_speed} m/h</td>`;
    strang += `         </tr>`;
    strang += `         <tr>`;
    strang += `           <td>Humidity:</td>`;
    strang += `           <td class='humidity' data-humidity='${weather.humidity}'>${weather.humidity}%</td>`;
    strang += `         </tr>`;
    strang += `       </table>`;
    strang += `     </div>`;
    strang += `     <div class='db-button-group'>`;
    strang += `       <p class='text-center'>`;
    strang += `         <a class="btn btn-primary delete-btn" role="button">Delete</a>`;
    strang += `         <a class="btn btn-primary scary-btn" role="button" data-update-scary='${weather.isScary}'>${weather.isScary ? 'Not Scary' : 'Scary'}</a>`;
    strang += `       </p>`;
    strang += `     </div>`;
    strang += `     <div class='date' data-date='${moment(weather.date).format('dddd MMMM DD, YYYY')}'>${moment(weather.date).format('dddd MMMM DD, YYYY')}</div>`;;
    strang += `    </div>`;
    strang += `  </div>`;
    strang += `</div>`;
  });
  strang += `</div>`;

  $(strang).appendTo('#savedWeather-container').hide().fadeIn(600);
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
