const request = require("request");

// const url =
("http://api.weatherstack.com/current?access_key=49449e318b2294c5fed5b195bface5b1&query=New%20York");

// const url =
//   "http://api.weatherstack.com/current?access_key=49449e318b2294c5fed5b195bface5b1&query=37.8267,-122.4233";

const url =
  "http://api.weatherstack.com/current?access_key=49449e318b2294c5fed5b195bface5b1&query=37.8267,-122.4233&units=f";

request.get({ url: url, json: true }, (errW, dataW) => {
  if (errW) return console.log(errW);

  // To Check Raw Request - body property will be shown this way
  // console.log(dataW);

  // To convert to JSON
  // const data = JSON.parse(dataW.body);

  // console.log(dataW);

  // Chrome Extension json parser

  const weatherDataCurrent = dataW.body.current;

  const weather_descriptions = weatherDataCurrent.weather_descriptions[0];
  const temperature = weatherDataCurrent.temperature;
  const feelslike = weatherDataCurrent.feelslike;

  console.log(
    `${weather_descriptions}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out`
  );
});
