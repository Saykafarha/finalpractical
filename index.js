function searchWeather() {
    const apiKey = "7e117c9dbfd6f4c655d776e2ebb57512";
    const searchInput = document.getElementById("searchInput").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const location = data.name + ", " + data.sys.country;
            const temperature = Math.round(data.main.temp) + "°C";
            const description = data.weather[0].description;
            const windSpeed = "Wind Speed: " + data.wind.speed + " m/s";
            const humidity = "Humidity: " + data.main.humidity + "%";
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

            document.getElementById("location").innerText = location;
            document.getElementById("temperature").innerText = temperature;
            document.getElementById("description").innerText = description;
            document.getElementById("wind").innerText = windSpeed;
            document.getElementById("humidity").innerText = humidity;
            document.getElementById("weather-icon").src = iconUrl;

            document.getElementById("weather-container").style.display = "block";
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            alert("City not found. Please enter a valid city name.");
        });
}
