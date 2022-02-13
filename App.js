import React from 'react'
import CustomComponent from './src/screens/CustomComponents'
import { View, Text } from 'react-native'

const App = () => {
  return (
    <View>    {/* View is div in react native */}

      <Text>Hello from app</Text>
      <CustomComponent />

    </View>
  )
}

export default App