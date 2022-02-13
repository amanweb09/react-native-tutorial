import React from 'react'
import CustomComponent from './src/screens/CustomComponents'
import FlatListDemo from './src/screens/FlatList'
import { View, Text } from 'react-native'
import NetflixChallenge from './src/screens/NetflixChallenge'
import ImagesFile from './src/screens/Images'

const App = () => {
  return (
    <View>    {/* View is div in react native */}

      <Text>Hello from app</Text>
      <CustomComponent />
      <FlatListDemo />
      <NetflixChallenge />
      <ImagesFile />

    </View>
  )
}

export default App