import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import { GlobalStyles } from "../../styles/colors/GlobalColors"


const NewsDetails = ({ route, navigation }) => {

    const imageId = route.params.image
    const titleId = route.params.title
    const descriptionId = route.params.description

    return (
        <View style={styles.mainContainer}>
            <View style={styles.line}></View>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>{titleId}</Text>
                    <Image style={styles.image} source={{ uri: imageId }} />
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>{descriptionId}</Text>
                    </View>
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
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    image: {
        width: '90%',
        height: 220,
        borderColor: GlobalStyles.colors.primary200,
        borderWidth: 3,
        borderRadius: 10
    },
    line: {
        borderBottomColor: '#252424',
        borderBottomWidth: 0.3
    },
    title: {
        color: GlobalStyles.colors.text,
        fontSize: 20,
        padding: 5,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    descriptionContainer: {
        padding: 10
    },
    description: {
        color: GlobalStyles.colors.text,
        fontSize: 16,
        textAlign: 'center'
    }
})