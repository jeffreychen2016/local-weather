const printWidgets = (weatherData,days) => {
  let strang = '';

  if (days === 1) {
    // remove all widgets each time re-submit the zipcode
    // then re-print new widgets
    $('.weahter-widgets-row').remove();

    strang += `<div class="row margin-top weather-widgets-current-day-row weahter-widgets-row">`;
    strang += `<div class="col-sm-6 col-md-4 col-md-offset-4 weathercard-current-day weather-widgets">`;
    strang += `  <div class="thumbnail">`;
    strang += `    <img src="http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png" alt="...">`;
    strang += `    <div class="caption">`;
    strang += `      <p>Temperature:${weatherData.main.temp}</p>`;
    strang += `      <p>Conditions:${weatherData.weather[0].description}</p>`;
    strang += `      <p>Air pressure:${weatherData.wind.speed}</p>`;
    strang += `      <p>Wind speed${weatherData.main.pressure}</p>`;
    strang += `      <p><a href="#" class="btn btn-primary" role="button" id="btn-next-3-days">Next 3 Days</a> <a href="#" class="btn btn-default" role="button" id="btn-next-5-days">Next 5 Days</a></p>`;
    strang += `    </div>`;
    strang += `  </div>`;
    strang += `</div>`;
  } else if (days === 5 || days === 3) {
    // remove all widgets that are not current day widget
    // then re-print widgets for either 3 days or 5 days to avoid appending empty row
    $('.weather-widgets-not-current-day-row').remove();

    strang += `<div class="row margin-top weather-widgets-not-current-day-row weahter-widgets-row">`;
    weatherData.list.forEach((weather) => {
      const hour = weather.dt_txt.slice(11,13);
      if (hour === '12') {
        strang += `<div class="col-sm-6 col-md-4 weathercard-other-than-current-day weather-widgets">`;
        strang += `  <div class="thumbnail">`;
        strang += `    <img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png" alt="...">`;
        strang += `    <div class="caption">`;
        strang += `      <p>Temperature:${weather.main.temp}</p>`;
        strang += `      <p>Conditions:${weather.weather[0].description}</p>`;
        strang += `      <p>Air pressure:${weather.main.pressure}</p>`;
        strang += `      <p>Wind speed:${weather.wind.speed}</p>`;
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

const removeWidgets = () => {
  $('.weather-widgets-row').remove();
};

module.exports = {
  printWidgets,
  removeWidgets,
};
