const request = require("request");


const forecast = (latitude, longitude, callback) => {
  const url = `https://api.weatherstack.com/current?access_key=45243f7463df79b41bd117c13dde917d&query=${latitude},${longitude}&units=f`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to find the weather service", undefined);
    } else if (response.body.error) {
      callback("Unable to find the location", undefined);
      console.log(response.body.error);
    } else {
      // Prepare the forecast data
      const forecastData = {
        description: "Its clear throughout the day...",
        temperature: response.body.current.temperature,
        precip: response.body.current.precip,
      };

    
      callback(undefined, forecastData);
    }
  });
};

module.exports = forecast;
