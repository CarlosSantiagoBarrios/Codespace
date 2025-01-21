// This script makes a GET call on the Pexels API (https://www.https://www.pexels.com/api/documentation)
// Filters the results to have only the 'id' 'large2x' and 'url' fields
// Automatically downloads a .json file into the local machine with the results

//Calls
//curated: https://api.pexels.com/v1/curated?page=10&per_page=80
//search: https://api.pexels.com/v1/search?page=100&per_page=80&query=animals 

// Define the API URL and the authorization key
//change only the '?page' (eq or > 100), and the 'query', as changing the 'per_page' (80) doesn't really make a difference (the # of photos retrieved won't ever be higher than 80)


const apiKey = "6EdsN9H0AGKaO5qjDly59dWAJJpXaKZf2pc1AfbuaNeSzGyDGJQxcFqK";

const page = 21;
const perPage = 80;
const query = 'sea';

const curated = `https://api.pexels.com/v1/curated?page=${page}&per_page=${perPage}`;
const search = `https://api.pexels.com/v1/search?page=${page}&per_page=${perPage}&query=${encodeURIComponent(query)}`;

// Api Switch (curated, search)
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

        // Map through the photos and extract the id, large2x URL, and url
        const photosArray = data.photos.map(photo => ({
            id: photo.id,
            large2x: photo.src.large2x,
            url: photo.url
        }));

        // Print the result as a JSON array
        console.log(JSON.stringify(photosArray, null, 2));

        // Create a blob from the photos array
        const jsonBlob = new Blob([JSON.stringify(photosArray, null, 2)], { type: 'application/json' });

        // Create a download link
        const url = URL.createObjectURL(jsonBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'photos.json'; // Set the default filename

        // Append to body, click the link, and remove it
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Revoke the object URL after download
        URL.revokeObjectURL(url);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Call the function to execute the GET request
fetchCuratedPhotos();