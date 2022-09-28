import { Image, View, StyleSheet, Pressable } from "react-native"

const WallpaperItem = ({ item, onPress }) => {
    return (

        <View style={styles.container}>
            <Pressable onPress={onPress}>
                <Image style={styles.mealImg} source={{ uri: item }} />
            </Pressable>
        </View>
    )
}
export default WallpaperItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 1
    },
    mealImg: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
    },
})