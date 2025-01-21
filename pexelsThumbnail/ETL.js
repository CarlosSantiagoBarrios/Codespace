// This script makes a GET call on the Pexels API (https://www.https://www.pexels.com/api/documentation)

//Calls
//curated: https://api.pexels.com/v1/curated?page=10&per_page=80
//search: https://api.pexels.com/v1/search?page=100&per_page=80&query=animals 

// Define the API URL and the authorization key
//change only the '?page' (eq or > 100), and the 'query', as changing the 'per_page' (80) doesn't really make a difference (the # of photos retrieved won't ever be higher than 80)


// Load prompt: 
// --> Perform 100 calls (i.e until const 'page' = 100)
// --> Each time a call is performed, run the fetchCuratedPhotos(); function as usual, but now, instead of printing out the the results, add them to a                  
//     finalJsonPhotosLinks array that will eventually contain all the results from run 1 till run 100
// --> Once having performed all the calls, printout the content of the finalJsonPhotosLinks array

const apiKey = "6EdsN9H0AGKaO5qjDly59dWAJJpXaKZf2pc1AfbuaNeSzGyDGJQxcFqK";

const page = 21;
const perPage = 80;
const query = 'food';

const curated = `https://api.pexels.com/v1/curated?page=${page}&per_page=${perPage}`;
const search = `https://api.pexels.com/v1/search?page=${page}&per_page=${perPage}&query=${encodeURIComponent(query)}`; 

//Api Switch (curated, search)
const apiUrl = `${search}`;


// Function to make the GET request
const fetchCuratedPhotos = async () => {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': apiKey
            }
        });

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Print the JSON data
        // console.log(data);

        // Map through the photos and extract the id, large2x URL, and url
        const photosArray = data.photos.map(photo => ({
            id: photo.id,
            large2x: photo.src.large2x,
            url: photo.url
        }));

        // Print the result as a JSON array
        console.log(JSON.stringify(photosArray, null, 2));

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Call the function to execute the GET request
fetchCuratedPhotos();