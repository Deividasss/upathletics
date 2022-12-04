import { View, Text, StyleSheet, TextInput } from "react-native"
import WallpapersList from "../../components/WallpapersList/WallpapersList"
import { GlobalStyles } from "../../styles/colors/GlobalColors"
import WALLPAPERS_DATA from "../../dataBases/WallpapersData.json"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"

const WallpapersScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.mainContainer}>
            <View>
                <WallpapersList items={WALLPAPERS_DATA.products} />
            </View>
        </View>
    )
}
export default WallpapersScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.background,
    },
})