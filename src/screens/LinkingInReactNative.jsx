import React from 'react'
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native'

const LinkingInReactNative = () => {
    //Linking is used for opening EXTERNAL links (eg. instagram, netflix, etc)

    return (
        <View>
            <TouchableOpacity onPress={() => {
                Linking.openURL('https://www.instagram.com')
            }}>
                <Text style={styles.linkStyle}>
                    Take Me to Instagram
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    linkStyle: {
        margin: 30,
        textAlign: "center",
        fontWeight: 'bold',
        color: 'pink'
    }
})

export default LinkingInReactNative