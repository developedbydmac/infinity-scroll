const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader')

let photosArray = [];


// Create Elements for Links & Photos, Add to DOm
function displayPhotos() {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        //Create <a> to link to Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank')
        // Create <img> for photo
        const img = document.createElement('img')
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        // Put <img> inside <a>, then put both inside image-container element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

//Unsplash API
const count = 30;
const apiKey = 'waq3XfuGC-lqLVKfHCY4Qvec5BxJEItAaoCP8KKnVgk'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
      const response = await fetch(apiUrl);
      photosArray = await response.json();
      displayPhotos();
    } catch (error) {
      // Catch Error Here
    }
  }

  // On Load
  getPhotos();