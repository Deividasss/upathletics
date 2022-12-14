import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from '../../styles/colors/GlobalColors';

export function ImagePickerAvatar({ onPress, image }) {

  const imageModal = () => {
    onPress()
  }

  const avatarImage = () => {
    if (image) {
      return (
        <Image
          style={styles.avatarImage}
          source={image}
        />
      )
    } else {
      return (
        <Image
          style={styles.avatarImage}
          source={require('../../assets/avatar.jpg')}
        />
      )
    }
  }

  return (
    <View style={styles.avatar}>
      {avatarImage()}
      <TouchableOpacity style={styles.addButton} onPress={imageModal}>
        <Ionicons style={styles.addButtonIcon} name="add" size={35} color={GlobalStyles.colors.text} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
  },
  avatarImage: {
    height: 100,
    width: 100,
    overflow: 'hidden',
    borderRadius: 260 / 2,
  },
  addButton: {
    flex: 1,
    height: 30,
    width: 30,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 50,
    position: 'absolute',
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButtonIcon: {
    height: 34,
    width: 32
  },
});
