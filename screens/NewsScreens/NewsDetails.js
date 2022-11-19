import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import { GlobalStyles } from "../../styles/colors/GlobalColors"
import ImageSlider from "../../utils/ImageSlider"

const NewsDetails = ({ route, navigation }) => {

    const imageId = route.params.mainImage
    const titleId = route.params.title
    const mainDescriptionId = route.params.mainDescription
    const secondDescriptionId = route.params.secondDescription
    const moreImages = route.params.moreImages
    const date = route.params.date

    return (
        <View style={styles.mainContainer}>
            <View style={styles.line}></View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <View style={styles.line2}></View>
                        <Text style={styles.title}>{titleId}</Text>
                        <View style={styles.line2}></View>
                        <Text style={styles.lastUpdated}>Last Updated on <Text style={styles.date}>{date}</Text></Text>
                    </View>
                    <Image style={styles.image} source={{ uri: imageId }} />
                    <View style={styles.descriptionContainer}>
                        <View style={styles.line3}></View>
                        {mainDescriptionId.map((item, index) => (
                            <Text key={index} style={styles.description}>{item}</Text>
                        ))}
                        <View style={styles.line3}></View>
                    </View>
                </View>
                <View style={styles.sliderContainer}>
                    <ImageSlider images={imageId} moreImages={moreImages} />
                </View>
                <View style={styles.descriptionContainer}>
                    <View style={styles.line3}></View>
                    {secondDescriptionId.map((item, index) => (
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