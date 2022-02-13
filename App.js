import React from 'react';
import { Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <Text style={styles.textStyle}>Hello World</Text>   //Text is the core component for text
  )
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'red'
  }
})

export default App