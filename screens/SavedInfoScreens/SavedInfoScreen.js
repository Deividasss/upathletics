import { Text, View } from "react-native"
import { useContext } from 'react';
import { AuthContext } from '../../store/auth-context';
import NEWS_DATA from '../../dataBases/NewsData.json'
import NewsList from "../../components/NewsList/NewsList";

const SavedInfoScreen = ({ navigation, route }) => {

    const authCtx = useContext(AuthContext);
    const favoriteProducts = NEWS_DATA.news.filter((item) => authCtx.ids.includes(item.id))

    if (favoriteProducts.length === 0) {
        return (
            <View >
                <Text >You have no favorites</Text>
            </View>
        )
    }

    return (
        <NewsList items={favoriteProducts} />
    )
}

export default SavedInfoScreen