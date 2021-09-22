import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


const WeatherItem = ({ title, value, unit }) => {
    return (
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemTitle}>{title}</Text>
            <Text style={styles.weatherItemTitle}>{value}{unit}</Text>
        </View>
    )
}

const DateTime = ({ current, lat, lon, timezone }) => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    useEffect(() => {
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            setDate(days[day] + ', ' + date + ' ' + months[month])
            setTime(hour)

        }, 1000);
    }, [])

    const city = timezone
    
    return (
        <View style={styles.container}>
                <View style={styles.rightAlign}>
                    <Text style={styles.timezone}>{city}</Text>
                    <Text style={styles.subheading}>{date}</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    subheading: {
        fontSize: 15,
        color: '#eee',
        fontWeight: '300'
    },
    rightAlign: {
        textAlign: 'right',
        marginTop: 20
    },
    timezone: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'
    },
    weatherItemContainer: {
        borderRadius: 10,
        padding: 10,
        marginTop: 10
    },
    weatherItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    weatherItemTitle: {
        color: '#eee',
        fontSize: 14,
        fontWeight: '100'
    }
})

export default DateTime