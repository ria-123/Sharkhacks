const placesData = {
  food: [
    {
      name: "Pizza Palace",
      rating: 4.5,
      comments: ["Great pizza!", "Fast delivery.", "Tasty and hot!"],
    },
    {
      name: "Burger World",
      rating: 4.2,
      comments: ["Amazing burgers!", "Good portion sizes."],
    },
  ],
  health: [
    {
      name: "Gym X",
      rating: 4.7,
      comments: ["Great equipment!", "Friendly trainers.", "Clean facilities."],
    },
    {
      name: "FitLife Gym",
      rating: 4.0,
      comments: ["Affordable membership", "Could use more weights."],
    },
  ],
  parks: [
    {
      name: "Central Park",
      rating: 4.8,
      comments: ["Beautiful scenery.", "Great for a jog.", "Family-friendly."],
    },
    {
      name: "Sunset Park",
      rating: 4.3,
      comments: ["Lovely sunsets.", "Nice place to relax."],
    },
  ],
};

// Function to display places based on category
function displayPlaces(category) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Clear previous results

  // Fetch relevant data based on category
  const places = placesData[category];

  if (places && places.length > 0) {
    places.forEach((place) => {
      const placeDiv = document.createElement("div");
      placeDiv.classList.add("place");

      const placeTitle = document.createElement("h2");
      placeTitle.innerText = place.name;
      placeDiv.appendChild(placeTitle);

      const placeRating = document.createElement("p");
      placeRating.classList.add("rating");
      placeRating.innerText = `Rating: ${place.rating} / 5`;
      placeDiv.appendChild(placeRating);

      const placeComments = document.createElement("div");
      placeComments.classList.add("comments");
      place.comments.forEach((comment) => {
        const commentParagraph = document.createElement("p");
        commentParagraph.classList.add("comment");
        commentParagraph.innerText = `- ${comment}`;
        placeComments.appendChild(commentParagraph);
      });
      placeDiv.appendChild(placeComments);

      resultsDiv.appendChild(placeDiv);
    });
  } else {
    resultsDiv.innerHTML = "<p>No places found for this category.</p>";
  }
}

// Add event listeners to buttons
document.getElementById("foodButton").addEventListener("click", function () {
  displayPlaces("food");
});
document.getElementById("healthButton").addEventListener("click", function () {
  displayPlaces("health");
});
document.getElementById("parksButton").addEventListener("click", function () {
  displayPlaces("parks");
});
