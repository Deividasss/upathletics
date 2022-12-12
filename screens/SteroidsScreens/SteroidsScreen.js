import { View, Text, StyleSheet, TextInput } from "react-native"
import SteroidsList from "../../components/SteroidsList/SteroidsList"
import { GlobalStyles } from "../../styles/colors/GlobalColors"
import STEROIDS_DATA from "../../dataBases/SteroidsData.json"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { useIsFocused } from '@react-navigation/native';

const SteroidsScreen = () => {
    const navigation = useNavigation()
    const screenIsFocused = useIsFocused();

    return (
        <View style={styles.mainContainer}>
            <View>
                <SteroidsList items={STEROIDS_DATA.products} />
            </View>
        </View>
    )
}
export default SteroidsScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.background,
    },
    title: {
        color: GlobalStyles.colors.text,
        fontSize: 20,
        textAlign: 'center',
        marginVertical:20
    },
})