const API_KEY = "b9d26520f7b8a11536f284acef2aa108";

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const {
        main: { temp },
        weather: [weather]
      } = data;
      const icon = `https://openweathermap.org/img/wn/${weather.icon}.png`;
      const weatherText = weather.description;
      const temperature  = parseInt(temp - 273.123);
      console.log(temp);
      const CityName = (
          (city[0]).toUpperCase()+(city.slice(1)).toLowerCase()
        );
      console.log(CityName);
      document.getElementById("weather").innerHTML = `
        <img src="${icon}" alt="Weather icon">
        <p>In <b>${CityName}</b> there is a <b>${weatherText}</b> and tempreture is <b>${temperature}°C</b>.</p>
      `;
    });
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const city = document.querySelector("input[name=city]").value;
  getWeather(city);
});
