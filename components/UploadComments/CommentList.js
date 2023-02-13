import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { GlobalStyles } from '../../styles/colors/GlobalColors';

const CommentList = ({ comments, image }) => {

    return (
        <View style={styles.container}>
            <FlatList
                data={comments}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.commentContainer}>
                        <Image style={styles.userImage} source={{ uri: image }} />
                        <Text style={styles.text}>{item}</Text>
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
    text: {
        fontSize: 16,
        color: GlobalStyles.colors.text,
        justifyContent: 'cent'
    },
    userImage:{
        width: 40,
        height: 40,
        borderRadius: 50
    }
});

export default CommentList;