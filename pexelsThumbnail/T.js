// This script takes the json response from the E.js file and returns a json array with photos (their id, large2x, and url)

// INSERT RESPONSE FROM PEXELS API between the ``
const jsonData = ``;

const data = JSON.parse(jsonData); // Parse the JSON string into a JavaScript object

// Map through the photos and extract the id, large2x URL, and url
const photosArray = data.photos.map(photo => ({
  id: photo.id,
  large2x: photo.src.large2x,
  url: photo.url
}));

// Print the result as a JSON array
console.log(JSON.stringify(photosArray, null, 2));