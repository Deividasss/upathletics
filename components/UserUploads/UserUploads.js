import { View, FlatList, TouchableOpacity, Text, Image, StyleSheet } from "react-native"
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import SaveButon from "../ui/SaveButton";
import { GlobalStyles } from "../../styles/colors/GlobalColors";

const UserUploads = ({images}) => {
   
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <FlatList
                    data={images}
                    numColumns={3}
                    keyExtractor={(item) => item.uri}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Image source={item} style={{ width: 130, height: 130, borderRadius: 5 }} />
                        </View>
                    )}
                />
            </View>
        </View>
    )
}
export default UserUploads

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: GlobalStyles.colors.modal,
        borderTopWidth: 2,
        paddingTop: 10
    },
    item: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: GlobalStyles.colors.primary200,
        borderWidth: 2,
        borderRadius: 5
    },
})