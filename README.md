# Weather Info Dashboard

A beginner-friendly React frontend application that fetches and displays real-time weather information using the OpenWeatherMap API. The app demonstrates proper handling of loading, error, and success states with a clean and interactive dark brown UI theme.

##Project Overview

The Weather Info Dashboard allows users to search for a city and instantly view its current weather conditions such as:

Temperature (°C)

Humidity

Weather condition/description

This project is ideal for beginners learning React, API integration, and state management.

### Objectives

Fetch real-time weather data from a public API

Handle different application states (loading, error, success)

Practice React hooks (useState)

Build a clean, responsive, and interactive UI

Learn proper project structure

#### Tech Stack

React (Create React App)

JavaScript (ES6)

HTML5 & CSS3

OpenWeatherMap API

##### Features

Search weather by city name

Loading state while fetching data

Error handling for:

Invalid city name

Network issues

API limit exceeded

Success state with weather details

Dark brown modern UI theme

Smooth CSS animations

###### Project Structure
weather-dashboard/
│
├─ src/
│  ├─ components/
│  │  └─ WeatherApp.js
│  │
│  ├─ services/
│  │  └─ weatherService.js
│  │
│  ├─ App.js
│  ├─ App.css
│  ├─ index.js
│
├─ public/
├─ package.json
└─ README.md

####### API Used

OpenWeatherMap API
https://openweathermap.org/api

The free tier is used to fetch current weather data by city name.

######## How It Works

User enters a city name

App sends a request to OpenWeatherMap API

While data is loading, a loading message is shown

If an error occurs, a user-friendly error message is displayed

On success, weather details are rendered on the screen

Getting Started
1. Install Node.js

Download and install Node.js from:
https://nodejs.org

Check installation:

node -v
npm -v

2. Clone or Download the Project
git clone <repository-url>
cd weather-dashboard

3. Install Dependencies
npm install

4. Add API Key

Open the file:

src/services/weatherService.js


Add your OpenWeatherMap API key:

const API_KEY = "YOUR_API_KEY_HERE";

5. Run the Project
npm start


Open in browser:

http://localhost:3000

UI States Explained

Loading State: Shows loading text while data is being fetched

Error State: Displays meaningful error messages

Success State: Shows weather information in a styled card
