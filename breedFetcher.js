const request = require("request");
const args = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;

request(url, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.log(error);
    console.log(response);
    process.exit();
  }
  const data = JSON.parse(body);
  console.log(data.length);
  if (data.length === 0) {
    console.log(`Breed not found :( `);
  } else {
    console.log(data);
    console.log(typeof data);
  }
});
