setTimeout(() => {
  console.log("2 Seconds Are Up");
}, 2000);

const names = ["Andrew", "Jen", "Jess"];

const shortnames = names.filter((name) => {
  return name.length <= 4;
});

// Sync Code - Without Callback Pattern
// const geocode = (address, callback) => {
//   const data = {
//     latitude: 100,
//     longitude: 200,
//   };

//   return data;
// };

// console.log(geocode("Karachi"));

// Callback Pattern
const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 100,
      longitude: 200,
    };

    // Call callback with value you want to return
    callback(data);
  }, 2000);
};

geocode("London", (data) => {
  console.log(data);
});

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});
