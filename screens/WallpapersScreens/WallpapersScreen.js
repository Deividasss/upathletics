import { View, Text, StyleSheet, } from "react-native"
import WallpapersList from "../../components/WallpapersList/WallpapersList"
import { GlobalStyles } from "../../styles/colors/GlobalColors"

const WallpapersScreen = () => {
    return (
        <View style={styles.container}>
            <View>
                <WallpapersList />
            </View>
        </View>
    )
}
export default WallpapersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.background,
    },
})