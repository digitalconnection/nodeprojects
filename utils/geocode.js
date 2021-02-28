const request = require("request");

const geocode = (address, callback) => {
  const urlGeoCoding = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiZGlnaXRhbGNvbm5lY3Rpb24iLCJhIjoiY2tsaHFvZjlpMGZ6eTJvcnJ5azMwN3pvbSJ9.JI0HTvWr7LYbyHnCgwrhfg&limit=1`;
  setTimeout(() => {
    request.get({ url: urlGeoCoding, json: true }, (error, response) => {
      if (error) {
        callback("Unable to connect to location services", undefined);
      } else if (response.body.message || response.body.features.length === 0) {
        callback("Location not found", undefined);
      } else {
        const geoLocation = response.body;

        callback(undefined, {
          latitude: geoLocation.features[0].center[1],
          longitude: geoLocation.features[0].center[0],
          location: geoLocation.features[0].place_name,
        });
      }
    });
  }, 2000);
};

module.exports = geocode;
