const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, _, body) => {
    // console.log("body: ", body);
    // console.log(typeof body);
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      // console.log(typeof data);
      // console.log(data[0]);
      const breedInfo = data[0];
      if (breedInfo === undefined) {
        callback("The breed does not exist.", null);
      } else {
        callback(null, breedInfo.description);
      }
    }

  });
};

module.exports = { fetchBreedDescription };