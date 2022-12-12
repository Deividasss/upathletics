import { StyleSheet, View, Modal, Pressable, Text } from "react-native";
import { useContext, useState } from 'react';
import { AuthContext } from '../../store/auth-context';
import { GlobalStyles } from "../../styles/colors/GlobalColors";
import { Ionicons } from '@expo/vector-icons';
import Button from "./Button";
import { useNavigation } from "@react-navigation/native"
import MenuButtons from "./MenuButtons";

const MenuModal = ({ isVisible, setModal, onPress }) => {
    const navigation = useNavigation()
    const authCtx = useContext(AuthContext);

    const buttonsHandler = () => {
        navigation.navigate('SavedInfo')
        setModal(false)
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
                presentationStyle={"overFullScreen"}
                onRequestClose={() => { setModal(false) }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalHeaderContainer}>
                            <Pressable
                                style={styles.closeBtn}
                                onPress={() => setModal(false)}
                            >
                                <Ionicons name="close" size={35} color={GlobalStyles.colors.buttons} />
                            </Pressable>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.savedButton}>
                            <Ionicons style={styles.btnIcon} name="heart" size={30} color={GlobalStyles.colors.buttons} />
                            <MenuButtons onPress={buttonsHandler}>Saved</MenuButtons>
                        </View>
                        <View style={styles.savedButton}>
                            <Ionicons style={styles.btnIcon} name="add-circle" size={30} color={GlobalStyles.colors.buttons} />
                            <MenuButtons onPress={() => alert('Add Account')}>Add account</MenuButtons>
                        </View>
                        <View style={styles.savedButton}>
                            <Ionicons style={styles.btnIcon} name="settings" size={30} color={GlobalStyles.colors.buttons} />
                            <MenuButtons onPress={()=> alert('Settings and privacy')}>Settings and privacy</MenuButtons>
                        </View>
                        <View style={styles.logoutButton}>
                            <Ionicons style={styles.btnIcon} name="exit" size={34} color={GlobalStyles.colors.buttons} />
                            <MenuButtons onPress={authCtx.logout}>Logout</MenuButtons>
                        </View>
                    </View>
                </View>
            </Modal >
        </View >
    )
}
export default MenuModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
    },
    modalView: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: GlobalStyles.colors.modal,
        borderRadius: 20,
        width: '100%',
        height: 400,
    },
    closeBtn: {
        position: 'absolute',
        right: 15,
        top: 8,
    },
    line: {
        borderColor: GlobalStyles.colors.primary200,
        borderWidth: 1,
        marginTop: 50,
        width: '100%',
    },
    btnIcon: {
        margin: 5
    },
    savedButton: {
        marginHorizontal: 20,
        flexDirection: 'row',
        borderBottomColor: GlobalStyles.colors.primary200,
        borderBottomWidth: 1,
    },
    logoutButton: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 60,
        borderBottomColor: GlobalStyles.colors.primary200,
        borderBottomWidth: 1,
    },
})