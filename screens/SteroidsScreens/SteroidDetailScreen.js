import { View, Text, Image, StyleSheet, ScrollView } from "react-native"
import { useLayoutEffect } from "react"
import { GlobalStyles } from "../../styles/colors/GlobalColors"
import STEROIDS_DATA from "../../dataBases/SteroidsData.json"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../../store/auth-context';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const SteroidDetailScreen = ({ route, navigation }) => {

    const authCtx = useContext(AuthContext);
    const productId = route.params.productId
    const selectedProduct = STEROIDS_DATA.products.find((item) => item.id === productId)
    const productIsFavorite = authCtx.ids.includes(productId)

    useLayoutEffect(() => {
        const categoryTitle = STEROIDS_DATA.products.find(
          (item) => item.id === productId
        ).title;
    
        navigation.setOptions({
          title: categoryTitle,
        });
      }, [productId, navigation]);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.line}></View>
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.image} source={{ uri: selectedProduct.image }} />
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{selectedProduct.title}</Text>
                        <Text style={styles.subTitle}>{selectedProduct.subTitle}</Text>
                    </View>
                    <Text style={styles.description}>{selectedProduct.description}</Text>
                </View>
            </ScrollView>
        </View>
    )
}
export default SteroidDetailScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.background
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    image: {
        width: '50%',
        height: 200,
        borderRadius: 5,
    },
    titleContainer: {
        borderBottomColor: GlobalStyles.colors.primary200,
        borderBottomWidth: 1,
        borderTopColor: GlobalStyles.colors.primary200,
        borderTopWidth: 1,
        marginVertical: 10,
        width: '80%',
    },
    title: {
        color: GlobalStyles.colors.primary50,
        fontSize: 25,
        padding: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    subTitle: {
        color: GlobalStyles.colors.text,
        textAlign: 'center',
        paddingBottom: 10,
        fontSize: 16
    },
    description: {
        color: GlobalStyles.colors.text,
        padding: 10,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.primary200,
        borderRadius: 10,
    },
    line: {
        borderBottomColor: '#252424',
        borderBottomWidth: 0.3
    },
    jolo: {
        color: 'white'
    }
})