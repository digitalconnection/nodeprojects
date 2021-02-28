const request = require("request");

const forecast = (lat, long, callback) => {
  setTimeout(() => {
    const url = `http://api.weatherstack.com/current?access_key=49449e318b2294c5fed5b195bface5b1&query=${lat},${long}`;
    request.get({ url: url, json: true }, (error, response) => {
      if (error) {
        callback("Unable to connect to weather services", undefined);
      } else if (response.body.error) {
        callback("Weather Data not found", undefined);
      } else {
        const weather_descriptions =
          response.body.current.weather_descriptions[0];

        const temperature = response.body.current.temperature;
        const feelslike = response.body.current.feelslike;

        callback(
          undefined,
          `${weather_descriptions}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out`
        );
      }
    });
  }, 2000);
};

module.exports = forecast;
