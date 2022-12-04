import { View, Text, Image, StyleSheet, ScrollView } from "react-native"
import { GlobalStyles } from "../../styles/colors/GlobalColors"
import WALLPAPERS_DATA from "../../dataBases/WallpapersData.json"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../../store/auth-context';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const WallpaperDetailScreen = ({ route, navigation }) => {

    const authCtx = useContext(AuthContext);
    const productId = route.params.productId
    const selectedProduct = WALLPAPERS_DATA.products.find((item) => item.id === productId)
    // const productIsFavorite = authCtx.ids.includes(productId)

    // const addToFavorites = () => {
    //     if (productIsFavorite) {
    //         authCtx.removeFavorite(productId)
    //         alert('Removed From Favorites')
    //     } else {
    //         authCtx.addFavorite(productId)
    //         alert('Added To Favorites')
    //     }
    // }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.line}></View>
            {/* <Pressable onPress={addToFavorites}>
                <Text style={styles.jolo}>JOLO</Text>
            </Pressable> */}
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.image} source={{ uri: selectedProduct.image }} />
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
    },
    jolo:{
        color: 'white'
    }
})