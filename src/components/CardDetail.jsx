import React from 'react'
import { Image, StyleSheet } from 'react-native'

const CardDetail = ({ source }) => {
    return (
        <Image source={source} style={styles.imageStyle} />
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 150,
        height: 220
    }
})

export default CardDetail