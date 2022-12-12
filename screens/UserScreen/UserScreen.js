import { Text, StyleSheet, View, Pressable, Image, Modal } from "react-native"
import { GlobalStyles } from "../../styles/colors/GlobalColors"
import { useContext, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../store/auth-context';
import { useNavigation } from "@react-navigation/native"
import * as ImagePicker from 'react-native-image-picker';
import React, { useCallback } from 'react';
import { ImagePickerModal } from '../../components/ui/ImagePickerModal';
import { ImagePickerAvatar } from '../../components/ui/Avatar';
import MenuModal from "../../components/ui/MenuModal";

const UserScreen = () => {
    const navigation = useNavigation()
    const authCtx = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [visible, setVisible] = useState(false);
    const [pickerResponse, setPickerResponse] = useState(null);

    const onImageLibraryPress = useCallback(() => {
        const options = {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: false,
        };
        ImagePicker.launchImageLibrary(options, setPickerResponse);
    }, []);

    const onCameraPress = React.useCallback(() => {
        const options = {
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: false,
        };
        ImagePicker.launchCamera(options, setPickerResponse);
    }, []);

    const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

    return (
        <>
            <View style={styles.mainContainer}>
                <View style={styles.navigatorContainer}>
                    <Image style={styles.logo} source={require('../../assets/logo.png')} />
                    <Pressable onPress={() => setModalVisible(true)} style={styles.menuBtn}>
                        <Ionicons name="menu" size={35} color={GlobalStyles.colors.text} />
                    </Pressable>
                    <View>
                        <MenuModal setModal={setModalVisible} isVisible={modalVisible} />
                    </View>
                </View>
                <View style={styles.userInfoContainer}>
                    <ImagePickerAvatar uri={uri} onPress={() => setVisible(true)} />
                    <ImagePickerModal
                        isVisible={visible}
                        onClose={() => setVisible(false)}
                        onImageLibraryPress={onImageLibraryPress}
                        onCameraPress={onCameraPress} />
                    <View style={styles.userEmailContainer}>
                        <Text style={styles.userEmail}>{authCtx.email}</Text>
                    </View>
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
    userInfoContainer: {
        alignItems: 'center',
        marginVertical: 50
    },
    userEmailContainer: {
        width: '80%',
        backgroundColor: GlobalStyles.colors.modal,
        padding: 10,
        margin: 10,
        borderRadius: 10
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
    userEmail: {
        color: GlobalStyles.colors.text,
        fontSize: 16,
        textAlign: 'center'
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