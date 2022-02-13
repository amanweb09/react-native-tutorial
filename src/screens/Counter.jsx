import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <View>
            <Text>
                Counter
            </Text>

            <Text style={styles.count}>{count}</Text>

            <TouchableOpacity
                onPress={() => {
                    count > 0 ? setCount(count - 1) : setCount(count)
                }}
                style={styles.counterBtn}>
                <Text
                    style={styles.btnText}>
                    -
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { setCount(count + 1) }}
                style={styles.counterBtn}>
                <Text
                    style={styles.btnText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    counterBtn: {
        width: 200,
        height: 60,
        backgroundColor: 'black',
        margin: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white'
    },
    count: {
        fontSize: 60,
        fontWeight: 'bold',
        margin: 20,
    }
})

export default Counter