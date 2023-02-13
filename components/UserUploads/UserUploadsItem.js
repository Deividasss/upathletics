import { View, Text, Pressable, Image, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"


const UserUploadsItem = ({ uri, image }) => {

    const navigation = useNavigation()

    const selectedNewsHandler = () => {
        navigation.navigate('UploadsDetails', {
            uri: uri,
            image: image

        })
    }
    return (
        <View style={styles.container}>
            <Pressable onPress={selectedNewsHandler} style={({ pressed }) => pressed && styles.pressed}>
                <Image source={{ uri }} style={{ width: 140, height: 150 }} />
            </Pressable>
        </View>

    )
}
export default UserUploadsItem

const styles = StyleSheet.create({
    container: {
        margin: 2,
    },
    pressed: {
        opacity: 0.7
    }
})