function searchWeather() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const searchBox = document.getElementById('search-box');
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const iconElement = document.getElementById('weather-icon');
    const windElement = document.getElementById('wind');
    const humidityElement = document.getElementById('humidity');
    const weatherContainer = document.getElementById('weather-container');

    const country = searchBox.value;

    fetch(https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            locationElement.innerText = data.name + ', ' + data.sys.country;
            temperatureElement.innerText = 'Temperature: ' + data.main.temp + '°C';
            descriptionElement.innerText = 'Weather: ' + data.weather[0].description;
            iconElement.src = getWeatherIcon(data.weather[0].icon);
            windElement.innerText = 'Wind Speed: ' + data.wind.speed + ' m/s';
            humidityElement.innerText = 'Humidity: ' + data.main.humidity + '%';
            weatherContainer.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('City not found. Please enter a valid city name.');
        });
}

function getWeatherIcon(iconCode) {
    return https://openweathermap.org/img/wn/${iconCode}.png;
}