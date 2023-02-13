import { View, FlatList, TouchableOpacity, Text, Image, StyleSheet } from "react-native"
import { GlobalStyles } from "../../styles/colors/GlobalColors";
import UserUploadsItem from "./UserUploadsItem";

const UserUploadsList = ({images, image}) => {

    const renderCategoriesItem = (itemData) => {
        return (
            <UserUploadsItem
                uri={itemData.item.uri}
                image={image}
            />
        )
    }
   
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <FlatList
                    data={images}
                    numColumns={3}
                    keyExtractor={(item) => item.uri}
                    renderItem={renderCategoriesItem}
                />
            </View>
        </View>
    )
}
export default UserUploadsList

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: GlobalStyles.colors.modal,
        borderTopWidth: 2,
        paddingTop: 10
    },
})