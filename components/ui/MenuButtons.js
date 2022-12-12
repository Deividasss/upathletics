import { View, Pressable, StyleSheet, Text } from "react-native"
import { GlobalStyles } from "../../styles/colors/GlobalColors"
import { Ionicons } from '@expo/vector-icons';

const MenuButtons = ({ children, onPress }) => {
    return (
        <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            onPress={onPress}
        >
            <View style={styles.buttonsContainer}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    )
}
export default MenuButtons

const styles = StyleSheet.create({
    button: {
      width: '90%',
      paddingTop: 5
    },
    buttonsContainer: {
        borderRadius: 5,
        paddingVertical: 10, 
    },
    pressed: {
        opacity: 0.7,
        backgroundColor: GlobalStyles.colors.primary200,
        borderRadius: 5
    },
    buttonText: {
        color: GlobalStyles.colors.text,
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 15
    },
});