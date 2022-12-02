import { Text, StyleSheet, View, Pressable, Image, Modal } from "react-native"
import { GlobalStyles } from "../../styles/colors/GlobalColors"
import { useContext, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import AuthContextProvider, { AuthContext } from '../../store/auth-context';
import Button from '../../components/ui/Button';
import FlatButton from "../../components/ui/FlatButton";

const UserScreen = () => {
    const authCtx = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <View style={styles.mainContainer}>
                <Pressable onPress={() => setModalVisible(true)} style={styles.logoBtn}>
                    <Image style={styles.logo} source={require('../../assets/logo.png')} />
                </Pressable>
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        presentationStyle={"overFullScreen"}
                        onRequestClose={() => { setModalVisible(false); }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <FlatButton style={styles.logoutBtn} onPress={authCtx.logout}>Log-Out</FlatButton>
                                <Pressable
                                    style={styles.closeBtn}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Ionicons name="close" size={35} color={GlobalStyles.colors.text} />
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>

        </>
    )
}
export default UserScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: GlobalStyles.colors.background,
    },
    logo: {
        height: 50,
        width: '32%',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: GlobalStyles.colors.modal,
        borderRadius: 20,
        width: '100%',
        height: 400,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    closeBtn: {
        position: 'absolute',
        right: 20,
        top: 15
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    logoBtn: {
        width: '100%',
    },
    logoutBtn: {
        backgroundColor: GlobalStyles.colors.text,
    },
});