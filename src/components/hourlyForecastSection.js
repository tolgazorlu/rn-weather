import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import moment from 'moment-timezone'
const HourlyForecastSection = ({ data }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {
                data && data.length > 0 ?
                    data.map((data, idx) => (
                        idx !== 0 && <HourlyForecastItem key={idx} forecastItem={data} />
                    ))
                    :
                    <View />
            }
        </View>
    )
}

const HourlyForecastItem = ({ forecastItem }) => {
    return (
        <View style={styles.hourlySection}>
            <Text style={styles.time}>{moment(forecastItem.dt * 1000).format('hh')}.00</Text>
            <Image source={{uri: "http://openweathermap.org/img/wn/" + forecastItem.weather[0].icon + "@4x.png"}} style={styles.icon} />
            <View>
                <Text style={styles.temp}>{Math.round(forecastItem.temp)}&#176;C</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50,
        alignSelf: 'center'
    },
    hourlySection: {
        alignItems: 'center',
        justifyContent:'center',
        width: 65,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    time: {
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
})

export default HourlyForecastSection