const request = require("request");

const weather = (lat, long, callback) => {
  setTimeout(() => {
    const url =
      "http://api.weatherstack.com/current?access_key=49449e318b2294c5fed5b195bface5b1&query=37.8267,-122.4233";
    request.get({ url: url, json: true }, (error, response) => {
      if (error) {
        callback("Unable to connect to weather services", undefined);
      } else if (response.body.error) {
        callback("Weather Data not found", undefined);
      } else {
        callback(undefined, {
          weather_descriptions: response.body.current.weather_descriptions[0],
          temperature: response.body.current.temperature,
          feelslike: response.body.current.feelslike,
        });
      }
    });
  }, 2000);
};

module.exports = weather;
