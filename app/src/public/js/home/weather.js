const API_KEY = "5fb31fac82bfbf3748c99073796c7d4f";
const locations = document.querySelector("#location");
const weather = document.querySelector("#weather");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("you live in ", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = data.name;
      const weatherState = data.weather[0].main;
      locations.innerHTML = `City : ${city}`;
      weather.innerHTML = `Weather : ${weatherState}`;
    });
}
function onGeoError() {
  alert("cant find your location!!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
