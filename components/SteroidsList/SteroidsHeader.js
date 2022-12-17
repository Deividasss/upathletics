import { View, Text, StyleSheet, Image } from "react-native"
import { GlobalStyles } from "../../styles/colors/GlobalColors"
import { Ionicons } from '@expo/vector-icons';

const SteroidsHeader = () => {
    return (
        <View style={styles.mainContainer}>
            <Ionicons name="fitness" size={80} color={GlobalStyles.colors.text} />
            <Text style={styles.mainText}>Everything about anabolic steroids</Text>
            <Text style={styles.paragraph}>This information is provided for educational purposes only!</Text>
        </View>
    )
}
export default SteroidsHeader

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        marginTop: "20%",
        marginBottom: '10%'
    },
    arrowContainer: {
        marginVertical: '50%'
    },
    mainText: {
        color: GlobalStyles.colors.text,
        fontSize: 30,
        textAlign: 'center',
        margin: 10
    },
    paragraph: {
        color: GlobalStyles.colors.error,
        fontSize: 16,
        width: '95%',
        textAlign: 'center'
    },
})