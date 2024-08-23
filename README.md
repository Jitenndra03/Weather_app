# Weather App

A sleek and modern weather application built with React. This app features a weather card with a glassmorphism effect and provides real-time weather information. 

## Features

- Modern design with glassmorphism effect
- Real-time weather data
- Background image from assets folder
- Responsive and user-friendly interface

## Technologies Used

- React
- CSS
- JavaScript
- [OpenWeatherMap API](https://openweathermap.org/api) (for weather data)

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jitenndra03/weather_app.git
Navigate to the project directory:


cd weather-app
Install the dependencies:


npm install
Create a .env file in the root directory and add your API key:


REACT_APP_API_KEY=your_openweathermap_api_key
Start the development server:


npm start
Open your browser and go to http://localhost:3000 to see the application in action.

File Structure
arduino
Copy code
weather-app/
├── public/
│   ├── index.html
│   └── assets/
│       └── background.jpg
├── src/
│   ├── components/
│   │   ├── WeatherCard.js
│   │   └── WeatherForm.js
│   ├── App.js
│   ├── index.js
│   └── styles/
│       ├── weather.css
│       └── index.css
├── .env
├── package.json
└── README.md
Components
WeatherCard.js: Displays weather information in a card with a glassmorphism effect.
WeatherForm.js: Form for users to input their location and get weather updates.
Usage
Enter your location in the search field.
Submit the form to get the current weather information.
The weather card will update with the latest weather data.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
If you want to contribute to this project, please fork the repository and submit a pull request with your changes.

Acknowledgements
OpenWeatherMap API for providing weather data.
React for the framework.
vbnet
