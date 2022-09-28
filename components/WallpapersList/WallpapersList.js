import {FlatList, StyleSheet, TextInput, View, Text,} from "react-native"
import WALLPAPERS_DATA from "../../dataBases/WallpapersData.json"
import WallpaperItem from "./WallpaperItem"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"

const WallpapersList = () => {
    const navigation = useNavigation()
    const [wallpaperData, setWallpaperData] = useState(WALLPAPERS_DATA.products)
    const [search, setSearch] = useState('')

    const renderCategoriesItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate('WallpaperDetails', {
                image: itemData.item.image
            })
        }
        return (
            <WallpaperItem
                item={itemData.item.image}
                onPress={pressHandler}
            />
        )
    }
    const searchFilter = (text) => {
        if (text) {
            const newData = wallpaperData.filter((item) => {
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            setWallpaperData(newData)
            setSearch(text)
        } else {
            setWallpaperData(WALLPAPERS_DATA.products)
            setSearch(text)
        }
    }

    return (
        <>
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.search}
                        placeholder='Search'
                        placeholderTextColor="grey"
                        value={search}
                        onChangeText={(text) => searchFilter(text)}
                    />
                </View>
                {wallpaperData < 1 && <Text style={styles.nothingFound}>No results found for "{search}"</Text>}
                <FlatList
                    data={wallpaperData}
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

