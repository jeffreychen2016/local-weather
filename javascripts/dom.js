const printWidgets = (weatherData,days) => {
  let strang = '';
  strang += `<div class="row margin-top">`;
  if (days === 1) {
    strang += `<div class="col-sm-6 col-md-4 col-md-offset-4">`;
    strang += `  <div class="thumbnail">`;
    // strang += `    <img src="..." alt="...">`;
    strang += `    <div class="caption">`;
    strang += `      <p>${weatherData.main.temp}</p>`;
    strang += `      <p>${weatherData.weather[days - 1].description}</p>`;
    strang += `      <p>${weatherData.wind.speed}</p>`;
    strang += `      <p>${weatherData.main.pressure}</p>`;
    strang += `      <p><a href="#" class="btn btn-primary" role="button" id="btn-next-3-days">Next 3 Days</a> <a href="#" class="btn btn-default" role="button" id="btn-next-5-days">Next 5 Days</a></p>`;
    strang += `    </div>`;
    strang += `  </div>`;
    strang += `</div>`;
  };
  strang += `</div>`;
  $('#weather-card').html(strang);
};

// {
//   "coord": {
//       "lon": -86.72,
//       "lat": 36.07
//   },
//   "weather": [
//       {
//           "id": 701,
//           "main": "Mist",
//           "description": "mist",
//           "icon": "50d"
//       }
//   ],
//   "base": "stations",
//   "main": {
//       "temp": 77.43,
//       "pressure": 1014,
//       "humidity": 65,
//       "temp_min": 75.2,
//       "temp_max": 80.6
//   },
//   "visibility": 16093,
//   "wind": {
//       "speed": 3.36
//   },
//   "clouds": {
//       "all": 75
//   },
//   "dt": 1527351300,
//   "sys": {
//       "type": 1,
//       "id": 2532,
//       "message": 0.0052,
//       "country": "US",
//       "sunrise": 1527330808,
//       "sunset": 1527382496
//   },
//   "id": 420033672,
//   "name": "Nashville",
//   "cod": 200
// }

module.exports = {
  printWidgets,
};
