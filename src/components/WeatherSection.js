import React from 'react'
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native'
import ForecastSection from './ForecastSection'
import HourlyForecastSection from './hourlyForecastSection'
const WeatherSection = ({ weatherData, todayData }) => {
    return (
        <>
            <CurrentTemp data={weatherData && weatherData.length > 0 ? weatherData[0] : {}} />
            <Text style={styles.forecastTitle}>Today</Text>
            <ScrollView horizontal={true} style={styles.scrollViewHourly}>
                <HourlyForecastSection data={todayData} />
            </ScrollView>
            <Text style={styles.forecastTitle}>7 Day Forecast</Text>
            <ScrollView horizontal={false} style={styles.scrollViewDaily}>
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
                    <Image source={{ uri: 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png' }} style={styles.image} />
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ fontSize: 100, color: 'black' }}>|</Text>
                    </View>
                    <View style={{ width: 150, height: 150, justifyContent: 'center' }}>
                        <Text style={styles.temp}>{Math.round(data.temp.day)}&#176;C</Text>
                        <Text style={styles.description}>{data.weather[0].description}</Text>
                    </View>
                </View>
                <View style={styles.info1}>
                    <View>
                        <Image source={require('../../assets/humidity.png')} style={{ height: 25, width: 25, alignSelf: 'center' }} />
                        <Text style={{ alignSelf: 'center' }}>Humidity</Text>
                        <Text style={{ alignSelf: 'center', fontSize: 15, fontWeight: 'bold' }}>{data.humidity}%</Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ fontSize: 30, color: 'gray' }}>|</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/cloud.png')} style={{ height: 25, width: 25, alignSelf: 'center' }} />
                        <Text style={{ alignSelf: 'center' }}>Reel feel</Text>
                        <Text style={{ alignSelf: 'center', fontSize: 15, fontWeight: 'bold' }}>{data.feels_like.day}&#176;C</Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ fontSize: 30, color: 'gray' }}>|</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/wind.png')} style={{ height: 25, width: 25, alignSelf: 'center' }} />
                        <Text style={{ alignSelf: 'center' }}>Wind Speed</Text>
                        <Text style={{ alignSelf: 'center', fontSize: 15, fontWeight: 'bold'  }}>{data.wind_speed} km/h</Text>
                    </View>
                </View>
                <View style={styles.info2}>
                    <View>
                        <View>
                            <Text style={styles.infoTitles}>Clouds</Text>
                            <Text style={styles.infoRes}>{data.clouds}%</Text>
                        </View>
                        <View>
                            <Text style={styles.infoTitles}>UV index</Text>
                            <Text style={styles.infoRes}>{data.uvi}</Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text style={styles.infoTitles}>Pressure</Text>
                            <Text style={styles.infoRes}>{data.pressure}mbar</Text>
                        </View>
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
    scrollViewDaily: {
        flex: 0.3,
    },
    scrollViewHourly: {
        flex: 0.3,
        flexDirection: 'row'
    },
    info1: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
        marginBottom: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 10
    },
    info2: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
        marginBottom: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 10,
        flexDirection: 'row',
    },
    infoTitles:{
        fontSize: 15,
        color: 'black'
    },
    infoRes:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    image: {
        width: 150,
        height: 150,
    },
    currentTempContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        marginBottom: 10
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