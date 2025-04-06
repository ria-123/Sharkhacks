// Check if geolocation is available in the user's browser
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    // Get latitude and longitude from the user's current location
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    // Example logic: Map the latitude and longitude to pixel values for the image position.
    // You can adjust these based on the actual map size and desired scaling.

    // In this example, let's say:
    // - Latitude range is -90 to 90
    // - Longitude range is -180 to 180
    // We'll map these to pixel positions.

    // Normalize latitude to pixel position (you can modify these calculations as needed)
    const xPosition = (longitude + 180) * (600 / 360); // 600 is the container width
    const yPosition = (90 - latitude) * (400 / 180); // 400 is the container height

    // Update the avatar image position dynamically based on location
    const avatar = document.querySelector('.overlay-image');
    avatar.style.left = `${xPosition}px`;
    avatar.style.top = `${yPosition}px`;
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}
