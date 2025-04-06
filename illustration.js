// Set up the map centered around Boston
const map = L.map('map').setView([42.3601, -71.0589], 13);

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add a marker to represent the user
const userMarker = L.marker([42.3601, -71.0589]).addTo(map)
  .bindPopup('You are here!')
  .openPopup();

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Move the marker and center the map
      userMarker.setLatLng([lat, lon]);
      map.setView([lat, lon]);
    },
    error => {
      console.error("Error getting location", error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 10000,
      timeout: 5000
    }
  );
} else {
  alert("Geolocation is not supported by your browser.");
}
