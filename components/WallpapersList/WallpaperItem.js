import { Image, View, StyleSheet, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"

const WallpaperItem = ({ id, image }) => {

    const navigation = useNavigation()

    const selectProductItemHandler = () => {
        navigation.navigate('WallpaperDetails', {
            productId: id,
            image: image,
        })
    }

    return (

        <View style={styles.container}>
            <Pressable onPress={selectProductItemHandler}>
                <Image style={styles.mealImg} source={{ uri: image }} />
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