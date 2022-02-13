import React from 'react'
import CustomComponent from './src/screens/CustomComponents'
import FlatListDemo from './src/screens/FlatList'
import { View, Text } from 'react-native'

const App = () => {
  return (
    <View>    {/* View is div in react native */}

      <Text>Hello from app</Text>
      <CustomComponent />
      <FlatListDemo />

    </View>
  )
}

export default App