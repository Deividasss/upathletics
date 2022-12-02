import { View, Text, StyleSheet, ScrollView, Image, } from "react-native"
import NewsList from "../../components/NewsList/NewsList";
import { GlobalStyles } from "../../styles/colors/GlobalColors";
import OlympiaCountdown from "../../utils/OlympiaCountdown";


const MainScreen = () => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
                <View style={styles.newsContainer}>
                    <NewsList />
                </View>
            </View>
        </View>
    )
}
export default MainScreen

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: GlobalStyles.colors.background,
        flex: 1
    },
    container: {
        flex: 1
    },
    countdown: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: 50,
        width: '32%',
        marginHorizontal: 10,
        marginVertical: 5
    },
    newsContainer: {
        flex: 1,
    }
})