import { View, Image, StyleSheet, Text } from "react-native"
import { GlobalStyles } from "../../styles/colors/GlobalColors"
import { AuthContext } from "../../store/auth-context"
import { useContext } from "react"
import SaveButon from "../../components/ui/SaveButton"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"


const UserUploadsDetailsScreen = ({ route }) => {

    const navigation = useNavigation()
    const productId = route.params.uri
    const userImage = route.params.image
    const authCtx = useContext(AuthContext);
    const [saved, setSaved] = useState()
    const [like, setLike] = useState(0)

    const addToFavorites = () => {
        if (saved) {
            setSaved('')
            setLike(like - 1)
        } else {
            setSaved('saved')
            setLike(like + 1)
        }
    }

    const avatarImage = () => {
        if (userImage) {
            return (
                <Image
                    style={styles.avatarImage}
                    source={{ uri: userImage.uri }}
                />
            )
        } else {
            return (
                <Image
                    style={styles.avatarImage}
                    source={require('../../assets/avatar.jpg')}
                />
            )
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.userInfoContainer}>
                {avatarImage()}
                <Text style={styles.userEmail}>{authCtx.email}</Text>
            </View>
            <Image source={{ uri: productId }} style={styles.image} />
            <View style={styles.buttonsContainer}>
                <SaveButon
                    icon={saved ? 'heart' : 'heart-outline'}
                    color="white"
                    size={35}
                    onPress={addToFavorites}
                />
                <SaveButon
                    icon={'chatbubble-outline'}
                    color="white"
                    size={35}
                    onPress={() => navigation.navigate('UploadsComments',{image: userImage})}
                />
            </View>
            <Text style={styles.likedText}>Liked by: {like}</Text>
        </View>
    )
}
export default UserUploadsDetailsScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.background,
    },
    userInfoContainer: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 15
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '10%',
        marginVertical: 10,
        marginHorizontal: 5
    },
    image: {
        height: '50%',
        width: '100%'
    },
    userEmail: {
        color: GlobalStyles.colors.text,
        fontSize: 15
    },
    avatarImage: {
        height: 40,
        width: 40,
        borderRadius: 50,
        margin: 10
    },
    likedText: {
        color: GlobalStyles.colors.text,
        marginHorizontal: 8
    }
})