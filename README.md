# rn-weather

A simple weather app built with React Native and Expo that shows current and forecast conditions for your location.

## About
Fetches current location (with a New York City fallback) and loads weather data from the OpenWeatherMap One Call API. Built in September 2021.

## Features
- Requests device location permission and falls back to a default location if denied
- Fetches current, hourly and daily forecast data from OpenWeatherMap
- Displays date/time, current weather and a forecast section with a background image

## Tech stack
- React Native (Expo SDK 42)
- expo-location, expo-linear-gradient, expo-status-bar
- moment-timezone

## Project structure
```
App.js                        # app entry, location + API fetch
src/config.js                 # env-based API key
src/components/
  DateTime.js
  WeatherSection.js
  ForecastSection.js
  hourlyForecastSection.js
```

## Getting started
```
npm install
cp .env.example .env   # fill in OPENWEATHER_API_KEY
npm start              # expo start
```

## Status
Learning project, not actively maintained.

## Related projects
- https://github.com/tolgazorlu/react-native-weather-app
