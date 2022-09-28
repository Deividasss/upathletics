import { View, Text, Image, StyleSheet, ScrollView } from "react-native"
import { GlobalStyles } from "../../styles/colors/GlobalColors"

const WallpaperDetailScreen = ({ route, navigation }) => {

    const catId = route.params.image

    return (
        <View style={styles.mainContainer}>
            <View style={styles.line}></View>
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.image} source={{ uri: catId }} />
                </View>
            </ScrollView>
        </View>
    )
}
export default WallpaperDetailScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.background
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.90,
        shadowRadius: 10
    },
    image: {
        width: '95%',
        height: 500,
    },
    line: {
        borderBottomColor: '#252424',
        borderBottomWidth: 0.3
    }
})