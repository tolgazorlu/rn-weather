import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState}from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import * as Location from 'expo-location';
import { LinearGradient } from 'expo-linear-gradient';

import DateTime from './src/components/DateTime'
import WeatherSection from './src/components/WeatherSection'
export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        fetchDataFromApi("40.7128", "-74.0060")
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    })();
  }, [])

  const fetchDataFromApi = (latitude, longitude) => {
    if(latitude && longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&units=metric&appid=4a916b90486c8e612e7fde46d275d795`)
      .then(res => res.json())
      .then(data => {
      setData(data)
      console.log(data)
      })
    }
    
  }

  return (
    <>
    <StatusBar
                backgroundColor="transparent"
                translucent={true}
    />
    {/*
    <LinearGradient colors={[sunnyColor1, sunnyColor1, sunnyColor2]} style={styles.container}>
        <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon}/>
        <WeatherSection weatherData={data.daily}/>
    </LinearGradient>
    */}
    <ImageBackground source={require('./assets/background0.jpg')} style={styles.container}>
      <LinearGradient colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.1)']} style={styles.backgroundGradient}>
        <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon}/>
        <WeatherSection weatherData={data.daily} todayData={data.hourly}/>
      </LinearGradient>
    </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundGradient: {
    flex: 1,
    padding: 10
  }
});