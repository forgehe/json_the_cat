const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      console.log(error);
      console.log(response);
      process.exit();
    }
    const data = JSON.parse(body);
    callback(data);
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
