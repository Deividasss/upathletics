import React from 'react';
import { SafeAreaView, Text, Image, Pressable, StyleSheet, Modal, View } from 'react-native';
import { GlobalStyles } from '../../styles/colors/GlobalColors';
import { Ionicons } from '@expo/vector-icons';
import Button from './Button';

export function ImagePickerModal({
  isVisible,
  onClose,
  onImageLibraryPress,
  onCameraPress,
}) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        presentationStyle={"overFullScreen"}
        onRequestClose={() => { setModalVisible(false); }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeaderContainer}>
              <Pressable
                style={styles.closeBtn}
                onPress={() => onClose(false)}
              >
                <Ionicons name="close" size={35} color={GlobalStyles.colors.buttons} />
              </Pressable>
            </View>
            <View style={styles.line}></View>
            <View style={styles.buttons}>
              <Pressable style={styles.button} onPress={onImageLibraryPress}>
                <Ionicons name="image" size={40} color={GlobalStyles.colors.primary50} />
                <Text style={styles.buttonText}>Library</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={onCameraPress}>
                <Ionicons name="camera" size={40} color={GlobalStyles.colors.primary50} />
                <Text style={styles.buttonText}>Camera</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

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
    height: 200
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
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  buttonIcon: {
    width: 30,
    height: 30,
    margin: 10,
  },
  buttons: {
    flexDirection: 'row',
    marginVertical: 20
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.text,
  },
});
