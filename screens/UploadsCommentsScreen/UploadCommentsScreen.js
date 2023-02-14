import { View, StyleSheet, Image } from "react-native"
import CommentForm from "../../components/UploadComments/CommentForm"
import CommentList from "../../components/UploadComments/CommentList"
import { useState } from "react"
import { GlobalStyles } from "../../styles/colors/GlobalColors"


const UploadsCommentsScreen = ({ route }) => {
    const [comments, setComments] = useState([]);
    const userImage = route.params.image

    const handleSubmit = (text) => {
        setComments([...comments, text]);
    };

    return (
        <View style={styles.mainContainer}>
            <CommentList image={userImage} comments={comments} />
            <CommentForm onSubmit={handleSubmit} />
        </View>
    )
}
export default UploadsCommentsScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.background,
    },
})