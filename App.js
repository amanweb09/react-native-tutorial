import React from 'react'
import CustomComponent from './src/screens/CustomComponents'
import FlatListDemo from './src/screens/FlatList'
import { View, Text } from 'react-native'
import NetflixChallenge from './src/screens/NetflixChallenge'
import ImagesFile from './src/screens/Images'
import Buttons from './src/screens/Buttons'
import TouchableOpacityInReactNative from './src/screens/TouchableOpacityInReactNative'
import LinkingInReactNative from './src/screens/LinkingInReactNative'
import MultipleStyles from './src/screens/MultipleStyles'

const App = () => {
  {/* View is div in react native */}
  return (
    <View>    

      <Text>Hello from app</Text>
      <CustomComponent />
      <FlatListDemo />
      <NetflixChallenge />
      <ImagesFile />
      <Buttons />
      <TouchableOpacityInReactNative />
      <LinkingInReactNative />
      <MultipleStyles />
    </View>
  )
}

export default App