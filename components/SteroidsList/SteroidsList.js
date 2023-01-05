import { FlatList, StyleSheet, TextInput, View, Text, } from "react-native"
import SteroidItem from "./SteroidItem"
import { useNavigation } from "@react-navigation/native"
import SteroidsHeader from "./SteroidsHeader";


const SteroidsList = ({ items }) => {
    const navigation = useNavigation()

    const renderCategoriesItem = (itemData) => {
        return <SteroidItem
            id={itemData.item.id}
            image={itemData.item.image}
            title={itemData.item.title}
            subTitle={itemData.item.subTitle}
            description={itemData.item.description}
            raiting={itemData.item.raiting}
        />
    }


    return (
        <>
            <View style={styles.mainContainer}>
                <FlatList
                    ListHeaderComponent={<SteroidsHeader />}
                    data={items}
                    renderItem={renderCategoriesItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </>
    )
}
export default SteroidsList

const styles = StyleSheet.create({

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

