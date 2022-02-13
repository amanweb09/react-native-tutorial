import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FlexboxReactNative = () => {
  return (
    <View style={styles.container}>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
        <Text>5</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',        //default direction in react native is column
        alignItems: 'center'
    }
})

export default FlexboxReactNative