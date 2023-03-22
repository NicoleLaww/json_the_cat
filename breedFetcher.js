const input = process.argv[2];
const request = require('request');
const url  = "https://api.thecatapi.com/v1/breeds/search?q=" + input;

request(url, (error, response, body) => {
  // console.log("body: ", body);
  // console.log(typeof body);
 
  const data = JSON.parse(body);
  // console.log(typeof data);
  // console.log(data[0]);
  const breedInfo = data[0];

  if (error || (response.statusCode !== 200)) {
    console.log(error, response.statusCode);
    return;
  } else if (breedInfo === undefined) {
    console.log("Breed was not found... It does not exist in this directory...");
  } else {
    console.log(breedInfo.description);
  }
  
});
