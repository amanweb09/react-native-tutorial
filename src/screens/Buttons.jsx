import React from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'

const Buttons = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Button</Text>
            <Button
                title='Join Now'
                onPress={() => {
                    Alert.alert('thanks for pressing')
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    textStyle: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Buttons