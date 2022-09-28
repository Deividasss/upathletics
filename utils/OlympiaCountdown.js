import { useEffect } from "react"
import { useState } from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { GlobalStyles } from "../styles/colors/GlobalColors"

const OlympiaCountdown = () => {
    const [days, setDays] = useState('')
    const [hours, setHours] = useState('')
    const [minutes, setMinutes] = useState('')
    const [seconds, setSeconds] = useState('')
    useEffect(() => {
        let countDownDate = new Date("Dec 15, 2022 20:00:00").getTime()
        let x = setInterval(function () {
            let now = new Date().getTime()
            let distance = countDownDate - now

            let days = Math.floor(distance / (1000 * 60 * 60 * 24))
            let hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            )
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            let seconds = Math.floor((distance % (1000 * 60)) / 1000)

            setDays(days)
            setHours(hours)
            setMinutes(minutes)
            setSeconds(seconds)

            if (distance < 0) {
                clearInterval(x)
                setTimer("joloo")
            }
        }, 1000)
    }, [])
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Image style={styles.olympiaLogo} source={{ uri: 'https://seeklogo.com/images/O/olympia-weekend-logo-1715C88359-seeklogo.com.png' }} />
                <View style={styles.textContainer}>
                    <Text style={styles.timerText}>{days}</Text>
                    <Text style={styles.dateText}>Days</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.timerText}>{hours}</Text>
                    <Text style={styles.dateText}>Hours</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.timerText}>{minutes}</Text>
                    <Text style={styles.dateText}>Minutes</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.timerText}>{seconds}</Text>
                    <Text style={styles.dateText}>Seconds</Text>
                </View>
            </View>
        </View>
    )
}
export default OlympiaCountdown

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: GlobalStyles.colors.primary200,
        borderRadius: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: "95%",
    },
    container: {
        flexDirection: 'row',
    },
    timerText: {
        color: GlobalStyles.colors.text,
        fontSize: 30,
        paddingHorizontal: 15,
    },
    textContainer: {
        alignItems: 'center',
        marginHorizontal: 5,
    },
    dateText: {
        color: GlobalStyles.colors.text
    },
    olympiaLogo: {
        width: "20%",
        height: 46 ,
        marginVertical: 6
    }
})

