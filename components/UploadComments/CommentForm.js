import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../styles/colors/GlobalColors';

const CommentForm = ({ onSubmit }) => {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        onSubmit(text);
        setText('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder="Add a comment"
                placeholderTextColor={GlobalStyles.colors.text}
            />
            <Button title="Post" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 50
    },
    input: {
        flex: 1,
        padding: 15,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        marginRight: 10,
        color: GlobalStyles.colors.text
    },
});

export default CommentForm;