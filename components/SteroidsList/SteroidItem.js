import { Image, View, StyleSheet, Pressable, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { GlobalStyles } from "../../styles/colors/GlobalColors"
import { Ionicons } from '@expo/vector-icons';

const SteroidItem = ({ id, image, title, subTitle, description, raiting }) => {

    const navigation = useNavigation()
    const stars = []

    for (let i = 1; i <= 5; i++) {
        let name = 'ios-star';
        if (i > raiting) {
            name = 'ios-star-outline'
        }
        stars.push((<Ionicons color={GlobalStyles.colors.primary50} name={name} size={17} key={i} />))
    }

    const selectProductItemHandler = () => {
        navigation.navigate('SteroidsDetails', {
            productId: id,
            image: image,
            title: title,
            subTitle: subTitle,
            description: description,
            raiting: raiting
        })
    }

    return (

        <View style={styles.mainContainer}>
            <Pressable onPress={selectProductItemHandler}>
                <View style={styles.container}>
                    <Image style={styles.steroidImg} source={{ uri: image }} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <View style={styles.raitingContainer}>
                            {stars}
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}
export default SteroidItem

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        margin: 5,
        padding: 5,
        backgroundColor: GlobalStyles.colors.modal,
        borderRadius: 10,
        borderColor: GlobalStyles.colors.primary200,
        borderWidth: 1
    },
    container: {
        flexDirection: 'row'
    },
    infoContainer: {
        justifyContent: 'center',
        margin: 10,
        paddingVertical: 10,
        borderTopColor: GlobalStyles.colors.primary200,
        borderTopWidth: 1,
        borderBottomColor: GlobalStyles.colors.primary200,
        borderBottomWidth: 1,
        width: "68%"
    },
    raitingContainer: {
        flexDirection: 'row'
    },
    title: {
        color: GlobalStyles.colors.text,
        fontSize: 18,
        textTransform: 'uppercase',
    },
    subTitle: {
        color: GlobalStyles.colors.text,
        fontSize: 17,
    },
    steroidImg: {
        height: 70,
        width: '20%',
        borderRadius: 10,
        padding: 20,
        margin: 7,
    },
})