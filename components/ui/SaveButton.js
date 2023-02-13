import { Pressable, View, Text, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import { GlobalStyles } from "../../styles/colors/GlobalColors"


const SaveButon = ({ onPress, icon, color,size }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed} >
            <View>
                <Ionicons name={icon} size={size} color={color} />
            </View>
        </Pressable >
    )
}
export default SaveButon

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,

    }
})