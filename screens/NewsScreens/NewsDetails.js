import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native"
import { useLayoutEffect } from "react";
import { GlobalStyles } from "../../styles/colors/GlobalColors"
import ImageSlider from "../../utils/ImageSlider"
import { AuthContext } from '../../store/auth-context';
import { useContext, useEffect, useState } from "react"
import NEWS_DATA from "../../dataBases/NewsData.json"
import SaveButon from "../../components/ui/SaveButton";

const NewsDetails = ({ route, navigation }) => {

    const authCtx = useContext(AuthContext);
    const productId = route.params.newsId
    const selectedProduct = NEWS_DATA.news.find((item) => item.id === productId)
    const productIsFavorite = authCtx.ids.includes(productId)

    const addToFavorites = () => {
        if (productIsFavorite) {
            authCtx.removeFavorite(productId)
        } else {
            authCtx.addFavorite(productId)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <SaveButon
                        icon={productIsFavorite ? 'heart' : 'heart-outline'}
                        color="white"
                        onPress={addToFavorites}
                    />
                );
            },
        });
    }, [navigation, addToFavorites]);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.line}></View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <View style={styles.line2}></View>
                        <Text style={styles.title}>{selectedProduct.title}</Text>
                        <View style={styles.line2}></View>
                        <Text style={styles.lastUpdated}>Last Updated on <Text style={styles.date}>{selectedProduct.date}</Text></Text>
                    </View>
                    <Image style={styles.image} source={{ uri: selectedProduct.mainImage }} />
                    <View style={styles.descriptionContainer}>
                        <View style={styles.line3}></View>
                        {selectedProduct.mainDescription.map((item, index) => (
                            <Text key={index} style={styles.description}>{item}</Text>
                        ))}
                        <View style={styles.line3}></View>
                    </View>
                </View>
                <View style={styles.sliderContainer}>
                    <ImageSlider images={selectedProduct.mainImage} moreImages={selectedProduct.moreImages} />
                </View>
                <View style={styles.descriptionContainer}>
                    <View style={styles.line3}></View>
                    {selectedProduct.secondDescription.map((item, index) => (
                        <Text key={index} style={styles.description}>{item}</Text>
                    ))}
                    <View style={styles.line3}></View>
                </View>
            </ScrollView>
        </View>
    )
}
export default NewsDetails

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.background
    },
    jolo: {
        color: 'white'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        padding: 10,
    },
    descriptionContainer: {
        padding: 20,
    },
    sliderContainer: {

    },
    image: {
        width: '95%',
        height: 220,
        borderRadius: 10
    },
    line: {
        borderBottomColor: '#252424',
        borderBottomWidth: 0.3
    },
    line2: {
        borderBottomColor: GlobalStyles.colors.primary200,
        borderBottomWidth: 2,
        marginVertical: 5,
    },
    line3: {
        borderBottomColor: GlobalStyles.colors.primary200,
        borderBottomWidth: 2,
        marginTop: 15
    },
    title: {
        color: GlobalStyles.colors.text,
        fontSize: 20,
        fontWeight: 'bold',
    },
    date: {
        fontWeight: 'bold',
    },
    lastUpdated: {
        color: GlobalStyles.colors.text,
    },
    description: {
        color: GlobalStyles.colors.text,
        fontSize: 16,
        letterSpacing: 1,
        marginTop: 10
    },
})