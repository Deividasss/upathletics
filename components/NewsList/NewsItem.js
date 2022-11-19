import { View, Image, Pressable, StyleSheet, Text } from "react-native"
import { GlobalStyles } from "../../styles/colors/GlobalColors"

const NewsItem = ({ mainImage, title, onPress }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
                <Image style={styles.mealImg} source={{ uri: mainImage }} />
                <View style={styles.titleContainer}>
                    <View style={styles.line}></View>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.line}></View>
                </View>
            </Pressable>
        </View>
    )
}
export default NewsItem

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        borderWidth: 2,
        borderColor: GlobalStyles.colors.primary200,
        borderRadius: 10
    },
    mealImg: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 230,
        borderRadius: 10
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: GlobalStyles.colors.text,
        fontSize: 15,
        fontWeight: 'bold',
        padding: 5,
        textAlign: 'center'
    },
    line: {
        borderBottomColor: GlobalStyles.colors.primary200,
        borderBottomWidth: 1,
        margin: 7,
        width: '90%'
    },
    pressed:{
        opacity: 0.7
    }
})