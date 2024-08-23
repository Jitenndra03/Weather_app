import React, { useEffect, useState } from 'react';
import './weather.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';

// Import video files for different weather conditions
import clear_video from '../assets/clear_sky.mp4';
import rain_video from '../assets/rain.mp4';
import snow_video from '../assets/snow.mp4';
import clouds_video from '../assets/cloud.mp4';

const weatherBackgrounds = {
  Clear: clear_video,
  Rain: rain_video,
  Snow: snow_video,
  Clouds: clouds_video,
  // Add more mappings as needed
};

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [backgroundVideo, setBackgroundVideo] = useState('');
  const [loading, setLoading] = useState(false);

  const allicons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  }

  const search = async (city) => {
    if (!city) return;
    setLoading(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      
      const icon = allicons[data.weather[0].icon] || clear_icon;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });

      const weatherCondition = data.weather[0].main;
      const backgroundVideo = weatherBackgrounds[weatherCondition] || clear_video;
      setBackgroundVideo(backgroundVideo);

    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    search("London");
  }, [])

  return (
    <div className='app'>
      {backgroundVideo && (
        <video className='background-video' autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className='weather'>
        <div className='search-bar'>
          <input type="text" placeholder='Search' />
          <img src={search_icon} alt="Search" onClick={() => search(document.querySelector('.search-bar input').value)} />
        </div>
        {loading && <p className='loading'>Loading...</p>}
        {weatherData && (
          <>
            <img src={weatherData.icon} alt="Weather icon" className='weather-icon' />
            <p className='temperature'>{weatherData.temperature}°C</p>
            <p className='location'>{weatherData.location}</p>
            <div className='weather-data'>
              <div className='col'>
                <img src={humidity_icon} alt="Humidity icon" />
                <div>
                  <p>{weatherData.humidity} %</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className='col'>
                <img src={wind_icon} alt="Wind speed icon" />
                <div>
                  <p>{weatherData.windSpeed} km/hr</p>
                  <span>Wind speed</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Weather;
