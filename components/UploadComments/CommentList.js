import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { GlobalStyles } from '../../styles/colors/GlobalColors';
import { AuthContext } from '../../store/auth-context';
import { useContext, useState } from 'react';
import SaveButon from '../ui/SaveButton';

const CommentList = ({ comments, image }) => {
    const authCtx = useContext(AuthContext);
    const [saved, setSaved] = useState()
    const [like, setLike] = useState(0)

    const avatarImage = () => {
        if (image) {
            return (
                <Image
                    style={styles.userImage}
                    source={{ uri: image.uri }}
                />
            )
        } else {
            return (
                <Image
                    style={styles.userImage}
                    source={require('../../assets/avatar.jpg')}
                />
            )
        }
    }

    const saveHandler = () => {
        if (saved) {
            setSaved('')
            setLike(like - 1)
        } else {
            setSaved('saved')
            setLike(like + 1)
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={comments}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.commentContainer}>
                        {avatarImage()}
                        <View style={styles.commentInfo}>
                            <Text style={styles.userEmail}>{authCtx.email}</Text>
                            <Text style={styles.text}>{item}</Text>
                            <Text style={styles.likedText}>{like} like</Text>
                        </View>
                        <View style={styles.likeBtnContainer}>
                            <SaveButon
                                icon={saved ? 'heart' : 'heart-outline'}
                                color="white"
                                size={25}
                                onPress={saveHandler}
                            />
                        </View>
                    </View>
                )}
            />
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commentContainer: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    likeBtnContainer: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: 20
    },
    commentInfo: {
        marginHorizontal: 10
    },
    userEmail: {
        color: GlobalStyles.colors.text,
        paddingBottom: 5,
    },
    text: {
        fontSize: 16,
        color: GlobalStyles.colors.text,
        justifyContent: 'cent',
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    likedText: {
        color: GlobalStyles.colors.text
    }
});

export default CommentList;