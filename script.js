const API_KEY = "b9d26520f7b8a11536f284acef2aa108";

function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const {
        main: { temp },
        weather: [weather],
        main: { name }
      } = data;
      console.log(url)
      const icon = `https://openweathermap.org/img/wn/${weather.icon}.png`;
      const weatherText = weather.description;
      const temp1 = parseInt(temp - 273.123);
      console.log(temp1);
      console.log(temp);
      const temperature = `${temp1}°C`;
      const namec =  `${name}`;
      document.getElementById("weather").innerHTML = `
        <img src="${icon}" alt="Weather icon">
        <h2>${city}</h2>
        <h3>${weatherText}</h3>
        <p>${temperature}</p>
      `;
    });
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const city = document.querySelector("input[name=city]").value;
  getWeather(city);
});
