import { FlatList, View, StyleSheet, Text } from "react-native"
import NEWS_DATA from "../../dataBases/NewsData.json"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import NewsItem from "./NewsItem"
import OlympiaCountdown from "../../utils/OlympiaCountdown"

const NewsList = () => {
    const navigation = useNavigation()
    const [newsData, setNewsData] = useState(NEWS_DATA.news)

    const renderCategoriesItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate('NewsDetails', {
                image: itemData.item.image,
                title: itemData.item.title,
                description: itemData.item.description
            })
        }
        return (
            <NewsItem
                image={itemData.item.image}
                title={itemData.item.title}
                description={itemData.item.description}
                onPress={pressHandler}
            />
        )
    }

    return (
        <>
            <View>
                <FlatList
                    data={newsData}
                    renderItem={renderCategoriesItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <>
                            <OlympiaCountdown />
                        </>
                    }
                    ListHeaderComponentStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: 5,
                    }}
                />
            </View>
        </>
    )
}
export default NewsList

const styles = StyleSheet.create({
    newsTitle: {
        color: 'white',
        fontSize: 25,
    },
})