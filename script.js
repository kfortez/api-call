const dogImageElement = document.getElementById("dog-image");
const dogFactElement = document.getElementById("dog-fact");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

let currentFactIndex = 0;
let dogFacts = [];
let dogImages = [];

async function fetchDogFacts() {
    const response = await fetch("https://dog-api.kinduff.com/api/facts?number=50");
    const data = await response.json();
    dogFacts = data.facts;
    displayFact();
}

async function fetchDogImages() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/50");
    const data = await response.json();
    dogImages = data.message;
    displayImage();
}

// Function to display the current dog fact and image
function displayFact() {
    dogFactElement.textContent = dogFacts[currentFactIndex];
}

function displayImage() {
    dogImageElement.src = dogImages[currentFactIndex];
}

function nextFact() {
    if (currentFactIndex < dogFacts.length - 1) {
        currentFactIndex++;
        displayFact();
        displayImage();
    }
}

function prevFact() {
    if (currentFactIndex > 0) {
        currentFactIndex--;
        displayFact();
        displayImage();
    }
}

nextButton.addEventListener("click", nextFact);
prevButton.addEventListener("click", prevFact);

// Initial fetch of facts and images
fetchDogFacts();
fetchDogImages();
