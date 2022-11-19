import { View, StyleSheet, FlatList, Text, Dimensions, Pressable, Image } from "react-native"
import React from "react"
import { useState } from "react";
import { Video } from "expo-av"
import { GlobalStyles } from "../../styles/colors/GlobalColors";
import { useIsFocused } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const Player = ({ item, title, focusedIndex, index, creator, creatorImg }) => {

    const video = React.useRef(null);
    const [status, setStatus] = useState({});
    const [isPlaying, setIsPlaying] = useState(false)
    const [muted, setMuted] = useState('')
    const { width, height } = Dimensions.get('window');
    const screenIsFocused = useIsFocused();

    const mute = () => {
        if (isPlaying === false) {
            setIsPlaying(true)
            setMuted(<Ionicons name='volume-mute' size={100} color={'white'} />)
        } else {
            setIsPlaying(false)
            setMuted('')
        }
    }

    return (
        <View style={{ height: height * 0.85, width: width, marginBottom: 12 }}>
            <Pressable style={styles.container} onPress={() => mute()}>
                <Video
                    ref={video}
                    style={{ height: 800, width: width }}
                    source={item}
                    resizeMode="cover"
                    isLooping
                    isMuted={isPlaying}
                    onPlaybackStatusUpdate={setStatus}
                    shouldPlay={focusedIndex === index ? screenIsFocused : focusedIndex === index}
                />
                <View style={styles.mutedContainer}>
                    <Text style={styles.muted}>{muted}</Text>
                </View>
            </Pressable>
            <View>
                <View style={styles.creatorContainer}>
                    <Image style={styles.creatorImg} source={{ uri: creatorImg }} />
                    <Text style={styles.creator}>{creator}</Text>
                </View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View >
    )
}
export default Player

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    creatorContainer: {
        flexDirection: 'row',
        padding: 15,
    },
    creator: {
        color: GlobalStyles.colors.text,
        padding: 10,
        fontSize: 16
    },
    creatorImg: {
        width: 40,
        height: 40,
        borderRadius: 100
    },
    title: {
        color: GlobalStyles.colors.text,
        marginBottom: 10,
        marginLeft: 15,
    },
    muted: {
        color: GlobalStyles.colors.text,
    },
    mutedContainer: {
        flex: 1,
        position: 'absolute',
    }
})