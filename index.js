const request = require("request");
const geocode = require("./utils/geocode.js");
const weather = require("./utils/weather.js");

/******************************************************/

// // const url =
// ("http://api.weatherstack.com/current?access_key=49449e318b2294c5fed5b195bface5b1&query=New%20York");

// // Remove both lat, long to generate error
// // const url =
// //   "http://api.weatherstack.com/current?access_key=49449e318b2294c5fed5b195bface5b1&query=&units=f";

// const url =
//   "http://api.weatherstack.com/current?access_key=49449e318b2294c5fed5b195bface5b1&query=37.8267,-122.4233";

// request.get({ url: url, json: true }, (errW, dataW) => {
//   if (errW) {
//     console.log(errW);
//   } else if (dataW.body.error) {
//     console.log("Unable to find location");
//   } else {
//     // To Check Raw Request - body property will be shown this way
//     // console.log(dataW);

//     // To convert to JSON
//     // const data = JSON.parse(dataW.body);

//     // console.log(dataW);

//     // Chrome Extension json parser
//     const weatherDataCurrent = dataW.body.current;

//     const weather_descriptions = weatherDataCurrent.weather_descriptions[0];
//     const temperature = weatherDataCurrent.temperature;
//     const feelslike = weatherDataCurrent.feelslike;

//     console.log(
//       `${weather_descriptions}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out`
//     );
//   }
// });

/******************************************************/

/******************************************************/

// const urlGeoCoding =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGlnaXRhbGNvbm5lY3Rpb24iLCJhIjoiY2tsaHFvZjlpMGZ6eTJvcnJ5azMwN3pvbSJ9.JI0HTvWr7LYbyHnCgwrhfg";

//  Remove Location to generate error
// const urlGeoCoding =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/.json?access_token=pk.eyJ1IjoiZGlnaXRhbGNvbm5lY3Rpb24iLCJhIjoiY2tsaHFvZjlpMGZ6eTJvcnJ5azMwN3pvbSJ9.JI0HTvWr7LYbyHnCgwrhfg&limit=1";

// const urlGeoCoding =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGlnaXRhbGNvbm5lY3Rpb24iLCJhIjoiY2tsaHFvZjlpMGZ6eTJvcnJ5azMwN3pvbSJ9.JI0HTvWr7LYbyHnCgwrhfg&limit=1";

// request.get({ url: urlGeoCoding, json: true }, (errGeo, response) => {
//   if (errGeo) {
//     console.log(errGeo);
//   } else if (response.body.message || response.body.features.length === 0) {
//     console.log("Location Not Found");
//   } else {
//     const geoLocation = response.body;

//     const place_name = geoLocation.features[0].place_name;
//     const lat = geoLocation.features[0].center[1];
//     const long = geoLocation.features[0].center[0];

//     console.log(`Place: ${place_name}, Lat:${lat}, Long:${long}\n`);
//   }
// });

/******************************************************/

geocode("Philadelphia", (error, data) => {
  if (error) return console.log(error);
  console.log(data);
});

// 37.8267, -122.4233
weather(37.8267, -122.4233, (error, data) => {
  if (error) return console.log(error);
  console.log(data);
});
