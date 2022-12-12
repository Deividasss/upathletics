import { View, Text, StyleSheet } from "react-native"
import { GlobalStyles } from "../../styles/colors/GlobalColors"

const SteroidsHeader = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainText} >What are anabolic steroids?</Text>
            <Text style={styles.paragraph}></Text>
        </View>
    )
}
export default SteroidsHeader

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
    },
    mainText: {
        color: GlobalStyles.colors.text,
        fontSize: 30
    },
    paragraph: {
        color: GlobalStyles.colors.text,
        fontSize: 16
    },
})