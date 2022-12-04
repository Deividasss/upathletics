import { Text, StyleSheet, View, Pressable, Image, Modal } from "react-native"
import { GlobalStyles } from "../../styles/colors/GlobalColors"
import { useContext, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../store/auth-context';
import Button from "../../components/ui/Button"
import { useNavigation } from "@react-navigation/native"

const UserScreen = () => {
    const navigation = useNavigation()
    const authCtx = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <View style={styles.mainContainer}>
                <View style={styles.navigatorContainer}>
                    <Image style={styles.logo} source={require('../../assets/logo.png')} />
                    <Pressable onPress={() => setModalVisible(true)} style={styles.menuBtn}>
                        <Ionicons name="menu" size={35} color={GlobalStyles.colors.text} />
                    </Pressable>
                </View>
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        presentationStyle={"overFullScreen"}
                        onRequestClose={() => { setModalVisible(false); }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={styles.modalHeaderContainer}>
                                    <Pressable
                                        style={styles.closeBtn}
                                        onPress={() => setModalVisible(false)}
                                    >
                                        <Ionicons name="close" size={35} color={GlobalStyles.colors.buttons} />
                                    </Pressable>
                                </View>
                                <View style={styles.line}></View>
                                <Text>{authCtx.email}</Text>
                                <Button onPress={() => navigation.navigate('SavedInfo')}>SAVED</Button>
                                <View style={styles.logoutBtn}>
                                    <Button onPress={authCtx.logout}>Logout</Button>
                                </View>
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
        backgroundColor: GlobalStyles.colors.background,
    },
    navigatorContainer: {
        flexDirection: 'row',
        width: '100%'
    },
    logo: {
        height: 50,
        width: '32%',
    },
    menuBtn: {
        position: 'absolute',
        right: 20,
        top: 10,
    },
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
    logoutBtn: {
        flex: 1,
        justifyContent: 'flex-end',
        marginHorizontal: 23,
        marginBottom: 60,
        width: "90%"
    },
});