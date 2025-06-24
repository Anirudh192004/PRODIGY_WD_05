const cityInput = document.getElementById('cityIn');
const searchBtn = document.getElementById('searchBtn');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const condition = document.getElementById('condition');

const apiKey = '84cbf457c462429587c22f8331167c96';

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (!city) return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        temperature.textContent = `Temperature ${Math.round(data.main.temp)}°C`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        condition.textContent = `Condition: ${data.weather[0].description}`;
      } else {
        alert('City not found. Please try again.');
      }
    })
    .catch(error => {
      alert('Error fetching weather data.');
    });
});
