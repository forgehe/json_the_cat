const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    // console.log(`error: ${typeof error}`);
    // if (error || response.statusCode !== 200) {
    //   console.log(error);
    //   console.log(response);
    //   process.exit();
    // }
    const data = JSON.parse(body);
    if (data.length === 0 || error) {
      console.log(error);
      callback(`error: ${error}`, null);
    } else {
      const data = JSON.parse(body);
      callback(error, data[0].description);
    }
  });
};

// const processBreed = breed => {
//   console.log(breed.length);
//   if (breed.length === 0) {
//     console.log(`Breed not found :( `);
//   } else {
//     console.log(breed);
//     console.log(typeof breed);
//   }
// };

// fetchBreedDescription("american", processBreed);
module.exports = { fetchBreedDescription };
