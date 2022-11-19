import { useState } from "react"
import { View, Image, ScrollView, Dimensions, Text, StyleSheet } from "react-native"

const { width } = Dimensions.get("window")
const height = width * 0.6

const ImageSlider = ({ moreImages }) => {
    const [active, setActive] = useState(0)
    const [image, setImage] = useState(moreImages)

    const change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if (slide !== active) {
            setActive(slide)
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView
                pagingEnabled
                horizontal
                scrollEventThrottle={16}
                onScroll={change}
                showsHorizontalScrollIndicator={false}
                style={styles.scroll}>
                {image.map((item, index) => (
                    <Image key={index}
                        source={{ uri: item }}
                        style={styles.image}
                    />
                ))}
            </ScrollView>
            <View style={styles.pagination}>
                {image.map((i, k) => (
                    <Text key={k} style={k === active ? styles.paginationActiveText : styles.paginationText}>⬤</Text>
                ))}
            </View>
        </View>
    )
}
export default ImageSlider

const styles = StyleSheet.create({
    container: {

    },
    scroll: {
        width, height
    },
    image: {
        width, height, resizeMode: 'cover'
    },
    pagination: {
        flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center'
    },
    paginationText: {
        color: "grey",
        margin: 3,
        marginBottom: 10,
        opacity: 0.4
    },
    paginationActiveText: {
        color: 'white',
        margin: 3,
        opacity: 0.7
    },
})