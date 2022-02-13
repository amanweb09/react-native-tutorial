import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'

const FlatListDemo = () => {
    const names = [
        {
            name: "aman"
        },
        {
            name: "guddu pandit"
        },
        {
            name: "bablu pandit"
        },
        {
            name: "munna tripathi"
        },
    ]

    return (
        //flatlist is same as array.map() in react
        //data represents the array to be mapped
        //renderItem is the function that we pass inside the map function

        <FlatList data={names} renderItem={(name) => {

            //structure of data 
            // {
            //     index: [index], 
            //     item: {obj1, obj2,...}, 
            //     separators: {..}
            // }

            return (
                <Text key={name.item.name} style={styles.textStyle}>{name.item.name}</Text>
            )
        }} />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: '1rem'
    }
})

export default FlatListDemo