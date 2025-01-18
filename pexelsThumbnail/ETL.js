// This script makes a GET call on the Pexels API (https://www.pexels.com/api/documentation/?#photos-search)

// Define the API URL and the authorization key
const apiUrl = "https://api.pexels.com/v1/search?page=100&per_page=80&query=world"; //change only the '?page' and the 'query', as changing the 'per_page' doesn't really make a difference (the # of photos retrieved won't ever be higher than 80)
const apiKey = "6EdsN9H0AGKaO5qjDly59dWAJJpXaKZf2pc1AfbuaNeSzGyDGJQxcFqK";

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