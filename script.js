const API_KEY = "e99774205843f619f2957ea1058e0edf";

function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const resultBox = document.getElementById("weatherResult");

    if (city === "") {
        resultBox.innerHTML = "<p>Please enter a city name</p>";
        return;
    }

    resultBox.innerHTML = "<p>Loading...</p>";

    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},IN&limit=1&appid=${API_KEY}`;

    fetch(geoUrl)
        .then(res => res.json())
        .then(geoData => {
            if (!geoData.length) {
                resultBox.innerHTML = "<p>City not found</p>";
                return;
            }

            const { lat, lon } = geoData[0];

            const weatherUrl =
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

            return fetch(weatherUrl);
        })
        .then(res => res.json())
        .then(data => {
            if (!data || !data.main) {
                resultBox.innerHTML = "<p>Error fetching data</p>";
                return;
            }

            resultBox.innerHTML = `
                <p><b>City:</b> ${data.name}</p>
                <p><b>Temperature:</b> ${data.main.temp} °C</p>
                <p><b>Humidity:</b> ${data.main.humidity}%</p>
                <p><b>Wind Speed:</b> ${data.wind.speed} m/s</p>
                <p><b>Description:</b> ${data.weather[0].description}</p>
            `;
        })
        .catch(() => {
            resultBox.innerHTML = "<p>Error fetching data</p>";
        });
}
