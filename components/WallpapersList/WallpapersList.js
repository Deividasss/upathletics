import { FlatList, StyleSheet, TextInput, View, Text, } from "react-native"
import WALLPAPERS_DATA from "../../dataBases/WallpapersData.json"
import WallpaperItem from "./WallpaperItem"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"

const WallpapersList = ({ items }) => {
    const navigation = useNavigation()
    const [wallpaperData, setWallpaperData] = useState(WALLPAPERS_DATA.products)
    const [search, setSearch] = useState('')

    const renderCategoriesItem = (itemData) => {
        return <WallpaperItem
            id={itemData.item.id}
            image={itemData.item.image}
        />
    }


    return (
        <>
            <View style={styles.mainContainer}>
                {wallpaperData < 1 && <Text style={styles.nothingFound}>No results found for "{search}"</Text>}
                <FlatList
                    data={items}
                    renderItem={renderCategoriesItem}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                />
            </View>
        </>
    )
}
export default WallpapersList

const styles = StyleSheet.create({
    mainContainer: {
        paddingBottom: 85
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 6,
    },
    search: {
        backgroundColor: '#252424',
        padding: 10,
        paddingLeft: 20,
        width: '90%',
        borderRadius: 5,
        color: 'white'
    },
    nothingFound: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 10
    }
})

