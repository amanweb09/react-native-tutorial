import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ImagesFile = () => {
    return (
        <View>
            <Text>Hello from images</Text>
            <Image
                style={styles.imageStyle}
                source={require('../../assets/img1.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 150,
        height: 220
    }
})
export default ImagesFile