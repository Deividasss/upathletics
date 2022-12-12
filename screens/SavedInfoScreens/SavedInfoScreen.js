import { ScrollView, Text, View, StyleSheet } from "react-native"
import { useContext } from 'react';
import { AuthContext } from '../../store/auth-context';
import NEWS_DATA from '../../dataBases/NewsData.json'
import NewsList from "../../components/NewsList/NewsList";
import { GlobalStyles } from "../../styles/colors/GlobalColors";
import { Ionicons } from '@expo/vector-icons'

const SavedInfoScreen = ({ navigation, route }) => {

    const authCtx = useContext(AuthContext);
    const favoriteProducts = NEWS_DATA.news.filter((item) => authCtx.ids.includes(item.id))

    if (favoriteProducts.length === 0) {
        return (
            <View style={styles.noFavoritesContainer} >
                <Ionicons name="alert" size={100} color={'white'} />
                <Text style={styles.noFavoritesMsg}>Nothing Is Saved</Text>
            </View>
        )
    }

    return (
        <>
            <View style={styles.mainContainer}>
                <View style={styles.jolo}>
                    <NewsList items={favoriteProducts} />
                </View>
            </View>
        </>
    )
}
export default SavedInfoScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.background,
    },
    noFavoritesContainer: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noFavoritesMsg: {
        color: GlobalStyles.colors.text,
        fontSize: 25
    },
    jolo: {
        flex: 1,
    }
})