import React from 'react'
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native'
import ForecastSection from './ForecastSection'

const WeatherSection = ({ weatherData }) => {
    return (
        <>
            <CurrentTemp data={weatherData && weatherData.length > 0 ? weatherData[0] : {}} />
            <Text style={styles.forecastTitle}>Forecast</Text>
            <ScrollView horizontal={false} style={styles.scrollView}>
                <ForecastSection data={weatherData} />
            </ScrollView>
        </>
    )
}

const CurrentTemp = ({ data }) => {

    if (data && data.weather) {
        return (
            <>
                <View style={styles.currentTempContainer}>
                    <View>
                        <Text style={styles.temp}>{Math.round(data.temp.day)}&#176;C</Text>
                        <Text style={styles.description}>{data.weather[0].description}</Text>
                    </View>
                    <Image source={{ uri: 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png' }} style={styles.image} />
                </View>
                <View style={styles.desc}>
                    <View>
                        <Image source={require('../../assets/humidity.png')} style={{ height: 25, width: 25, alignSelf: 'center' }} />
                        <Text style={{ alignSelf: 'center' }}>Humidity</Text>
                        <Text style={{ alignSelf: 'center' }}>%{data.humidity}</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/cloud.png')} style={{ height: 25, width: 25, alignSelf: 'center' }} />
                        <Text style={{ alignSelf: 'center' }}>Clouds</Text>
                        <Text style={{ alignSelf: 'center' }}>%{data.clouds}</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/wind.png')} style={{ height: 25, width: 25, alignSelf: 'center' }} />
                        <Text style={{ alignSelf: 'center' }}>Wind Speed</Text>
                        <Text style={{ alignSelf: 'center' }}>{data.wind_speed} km/h</Text>
                    </View>
                </View>
            </>
        )
    } else {
        return (
            <View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 0.5
    },
    desc: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30
    },
    image: {
        width: 200,
        height: 200,
    },
    currentTempContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
    },
    temp: {
        fontSize: 50,
        color: "white",
        textAlign: "center",
        fontWeight: 'bold'
    },
    description: {
        color: 'white',
        alignSelf: 'center'
    },
    forecastTitle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10
    }
})

export default WeatherSection