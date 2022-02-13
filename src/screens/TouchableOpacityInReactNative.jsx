import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'

const TouchableOpacityInReactNative = () => {

    //touchable opacity is a special type of button used for handling complex click events
    //you can add image or anything inside the touchabile opacity and use it as a button

    return (
        <View>
            <TouchableOpacity
                onPress={() => { console.log('pressed') }}
            >
                <Image
                    style={styles.buttonImg}
                    source={require('../../assets/img1.jpg')} />

                <Text>
                    This is Touchable Opacity
                </Text>
            
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonImg: {
        width: 75,
        height: 125
    }
})

export default TouchableOpacityInReactNative