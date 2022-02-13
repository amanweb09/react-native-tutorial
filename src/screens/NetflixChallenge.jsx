import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const shows = [
    {
        title: "Money Heist",
        year: "2019",
        genre: "thrill"
    },
    {
        title: "Lucifer",
        year: "2019",
        genre: "romance, thrill"
    },
    {
        title: "squid game",
        year: "2021",
        genre: "thrill"
    },
    {
        title: "Peaky Blinders",
        year: "2018",
        genre: "thrill, action"
    },
    {
        title: "Dark",
        year: "2019",
        genre: "suspense"
    },
    {
        title: "365 Days",
        year: "2019",
        genre: "thrill"
    }
]
const NetflixChallenge = () => {
    return (
        <View>
            <Text style={styles.heading}>Top 10 Netflix Shows</Text>

            <FlatList
                horizontal
                data={shows}
                showsHorizontalScrollIndicator={false}
                renderItem={(show) => {
                    return (
                        <View
                            style={styles.boxStyle}
                            key={show.item.title}>
                            <Text style={styles.title}>{show.item.title}</Text>
                            <Text style={styles.subText}>{show.item.year}</Text>
                            <Text style={styles.subText}>{show.item.genre}</Text>

                        </View>
                    )
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: "bold",
    },
    boxStyle: {
        width: 110,
        height: 170,
        backgroundColor: "black",
        margin: 20,
        padding: 10
    },
    title: {
        fontWeight: '600',
        fontSize: 15,
        color: 'white',
        textAlign: 'center'
    },
    subText: {
        fontSize: 8,
        color: 'white',
        textAlign: 'center',
        marginTop: 20
    }
})

export default NetflixChallenge