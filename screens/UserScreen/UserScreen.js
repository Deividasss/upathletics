import { Text, StyleSheet, View, Pressable, Image, Modal, Platform, FlatList } from "react-native"
import { GlobalStyles } from "../../styles/colors/GlobalColors"
import { useContext, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../store/auth-context';
import { useNavigation } from "@react-navigation/native"
import { ImagePickerModal } from '../../components/ui/ImagePickerModal';
import { ImagePickerAvatar } from '../../components/ui/Avatar';
import MenuModal from "../../components/ui/MenuModal";
import Button from "../../components/ui/Button";
import * as ImagePicker from 'expo-image-picker';

const UserScreen = () => {
    const navigation = useNavigation()
    const authCtx = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [visible, setVisible] = useState(false);
    const [image, setImage] = useState(null);
    const [images, setImages] = useState([])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        setImage(result)
        setImages(result)
    };

    console.log(images)

    const takeImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        })
        console.log(result)
    }


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
                    <ImagePickerAvatar image={image} onPress={() => setVisible(true)} />
                    <ImagePickerModal
                        isVisible={visible}
                        onClose={() => setVisible(false)}
                        onImageLibraryPress={pickImage}
                        onCameraPress={takeImage}
                    />
                    <View style={styles.userEmailContainer}>
                        <Text style={styles.userEmail}>{authCtx.email}</Text>
                    </View>
                    <Image style={styles.jolo} source={images} />
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
    jolo: {
        width: 200,
        height: 200
    }
});