import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MultipleStyles = () => {
    //to use more than one style, we need to pass an array of classes
    return (
        <View>
            <Text
                style={[styles.style1, styles.style2]}>
                There are 2 classes on me
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    style1: {
        color: 'red'
    },
    style2: {
        fontSize: 30
    }
})

export default MultipleStyles