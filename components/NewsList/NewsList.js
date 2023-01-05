import { FlatList, View, StyleSheet, Text } from "react-native"
import NewsItem from "./NewsItem"


const NewsList = ({ items }) => {

    const renderCategoriesItem = (itemData) => {
        return (
            <NewsItem
                id={itemData.item.id}
                mainImage={itemData.item.mainImage}
                title={itemData.item.title}
                mainDescription={itemData.item.mainDescription}
                secondDescription={itemData.item.secondDescription}
                date={itemData.item.date}
                moreImages={itemData.item.moreImages}
            />
        )
    }

    return (
        <>
            <View>
                <FlatList
                    data={items}
                    renderItem={renderCategoriesItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
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