import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

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
        {
            name: "beena tripathi"
        },
        {
            name: "akhandand tripathi"
        },
        {
            name: "golu gupta"
        },
    ]

    return (
        //flatlist is same as array.map() in react
        //data represents the array to be mapped
        //renderItem is the function that we pass inside the map function

        <FlatList
            data={names}
            horizontal={true}       //if we want to that our list should scroll in a horizontal direction (like netflix app)
            showsHorizontalScrollIndicator={false}      //for hiding/showing scrollbar
            inverted={true}     //reverse the order of the array in the list
            renderItem={(name) => {

                //structure of data 
                // {
                //     index: [index], 
                //     item: {obj1, obj2,...}, 
                //     separators: {..}
                // }

                return (
                    <View
                        key={name.item.name}
                        style={styles.listStyle}>
                        <Text
                            style={styles.textStyle}>
                            {name.item.name}
                        </Text>
                    </View>
                )
            }} />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: '1rem',
        color: "white",
    },
    listStyle: {
        width: 200,
        height: 75,
        backgroundColor: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
    }
})

export default FlatListDemo