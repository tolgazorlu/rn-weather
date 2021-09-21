import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import moment from 'moment-timezone'
const ForecastSection = ({ data }) => {
    return (
        <View style={{ flexDirection: 'column' }}>
            {
                data && data.length > 0 ?
                    data.map((data, idx) => (
                        idx !== 0 && <FutureForecastItem key={idx} forecastItem={data} />
                    ))
                    :
                    <View />
            }
        </View>
    )
}

const FutureForecastItem = ({ forecastItem }) => {
    const img = { uri: "http://openweathermap.org/img/wn/" + forecastItem.weather[0].icon + "@4x.png" }
    return (
        <View style={styles.futureForecastItemContainer}>
            <Text style={styles.day}>{moment(forecastItem.dt * 1000).format('dddd')}</Text>
            <Image source={img} style={styles.icon} />
            <View style={styles.dayTemps}>
                <Text style={styles.temp}>Day: {Math.round(forecastItem.temp.day)}&#176;C</Text>
                <Text style={styles.temp}>Night: {Math.round(forecastItem.temp.night)}&#176;C</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 75,
        height: 75,
        alignSelf: 'center'
    },
    futureForecastItemContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'rgba(0, 50, 100, 0.6)',
        borderRadius: 10
    },
    day: {
        fontSize: 20,
        color: "white",
        fontWeight: "300",
        alignSelf: 'center'
    },
    temp: {
        fontSize: 15,
        color: "white",
        textAlign: "center",
    },
    dayTemps: {
        justifyContent: 'center'
    }
})

export default ForecastSection