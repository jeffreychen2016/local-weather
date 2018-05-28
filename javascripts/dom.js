const printWidgets = (weatherData,days) => {
  let strang = '';
  strang += `<div class="row margin-top">`;

  if (days === 1) {
    strang += `<div class="col-sm-6 col-md-4 col-md-offset-4 weathercard-current-day weather-widgets">`;
    strang += `  <div class="thumbnail">`;
    // strang += `    <img src="..." alt="...">`;
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
    $('.weathercard-other-than-current-day').remove();
    weatherData.list.forEach((weather) => {
      const hour = weather.dt_txt.slice(11,13);
      if (hour === '00') {
        strang += `<div class="col-sm-6 col-md-4 weathercard-other-than-current-day weather-widgets">`;
        strang += `  <div class="thumbnail">`;
        // strang += `    <img src="..." alt="...">`;
        strang += `    <div class="caption">`;
        strang += `      <p>Temperature:${weather.main.temp}</p>`;
        strang += `      <p>Conditions:${weather.weather[0].description}</p>`;
        strang += `      <p>Air pressure:${weather.main.pressure}</p>`;
        strang += `      <p>Wind speed:${weather.wind.speed}</p>`;
        strang += `      <p><a href="#" class="btn btn-primary" role="button" id="btn-next-3-days">Next 3 Days</a> <a href="#" class="btn btn-default" role="button" id="btn-next-5-days">Next 5 Days</a></p>`;
        strang += `    </div>`;
        strang += `  </div>`;
        strang += `</div>`;
      };
    });
  };

  strang += `</div>`;
  $('#weather-card').append(strang);
  $(`.weathercard-other-than-current-day:gt(${days - 1})`).remove();
};

const removeWidgets = () => {
  $('.weather-widgets').remove();
};

module.exports = {
  printWidgets,
  removeWidgets,
};
