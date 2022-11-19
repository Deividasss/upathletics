import { View, StyleSheet, FlatList, Dimensions } from "react-native"
import React from "react"
import { useState } from "react"
import { GlobalStyles } from "../../styles/colors/GlobalColors"
import demo1 from "../../dataBases/demo1.mp4"
import demo2 from "../../dataBases/demo2.mp4"
import demo3 from "../../dataBases/demo3.mp4"
import Player from "../../components/VideoPlayer/Player"



const PlayerScreen = () => {

    const [focusedIndex, setFocusedIndex] = useState(0);

    const handleScroll = React.useCallback((e) => {
        const offset = Math.round(e.nativeEvent.contentOffset.y / 800);

        setFocusedIndex(offset)
    }, [setFocusedIndex]);


    const DATA = [
        {
            id: 1,
            video: demo1,
            creator: 'Mega max',
            creatorImg: 'https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=f1bb54a15add49a09c912eac851f4ff7&cx=0.56&cy=0.4&cw=397&ch=397',
            title: 'Motivation \nLISTEN TO THIS EVERYDAY TO CHANGE YOUR LIFE \nCONSISTENCY - Motivational Speech'
        },
        {
            id: 2,
            video: demo2,
            creator: 'Mega max',
            creatorImg: 'https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=f1bb54a15add49a09c912eac851f4ff7&cx=0.56&cy=0.4&cw=397&ch=397',
            title: 'Motivation \nLISTEN TO THIS EVERYDAY TO CHANGE YOUR LIFE \nCONSISTENCY - Motivational Speech'
        },
        {
            id: 3,
            video: demo3,
            creator: 'Mega max',
            creatorImg: 'https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=f1bb54a15add49a09c912eac851f4ff7&cx=0.56&cy=0.4&cw=397&ch=397',
            title: 'Motivation \nLISTEN TO THIS EVERYDAY TO CHANGE YOUR LIFE \nCONSISTENCY - Motivational Speech'
        },
        {
            id: 4,
            video: demo1,
            creator: 'Mega max',
            creatorImg: 'https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=f1bb54a15add49a09c912eac851f4ff7&cx=0.56&cy=0.4&cw=397&ch=397',
            title: 'Motivation \nLISTEN TO THIS EVERYDAY TO CHANGE YOUR LIFE \nCONSISTENCY - Motivational Speech'
        },
        {
            id: 5,
            video: demo1,
            creator: 'Mega max',
            creatorImg: 'https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=f1bb54a15add49a09c912eac851f4ff7&cx=0.56&cy=0.4&cw=397&ch=397',
            title: 'Motivation \nLISTEN TO THIS EVERYDAY TO CHANGE YOUR LIFE \nCONSISTENCY - Motivational Speech'
        },
        {
            id: 6,
            video: demo3,
            creator: 'Mega max',
            creatorImg: 'https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=f1bb54a15add49a09c912eac851f4ff7&cx=0.56&cy=0.4&cw=397&ch=397',
            title: 'Motivation \nLISTEN TO THIS EVERYDAY TO CHANGE YOUR LIFE \nCONSISTENCY - Motivational Speech'
        },
        {
            id: 7,
            video: demo3,
            creator: 'Mega max',
            creatorImg: 'https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=f1bb54a15add49a09c912eac851f4ff7&cx=0.56&cy=0.4&cw=397&ch=397',
            title: 'Motivation \nLISTEN TO THIS EVERYDAY TO CHANGE YOUR LIFE \nCONSISTENCY - Motivational Speech'
        },
    ];

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={DATA}
                renderItem={({ item, index }) => (
                    <Player
                        item={item.video}
                        index={index}
                        focusedIndex={focusedIndex}
                        title={item.title}
                        creator={item.creator}
                        creatorImg={item.creatorImg}
                    />
                )}
                keyExtractor={item => item.id}
                pagingEnabled
                onScroll={handleScroll}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
export default PlayerScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.background,
    },
})