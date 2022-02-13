import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomComponents = () => {
  return (
    <Text style={styles.textStyle}>Hello World from custom component</Text>   //Text is the core component for text
  )
}

const styles = StyleSheet.create({    //stylesheet is an object containing classes that we want to use
  textStyle: {
    color: 'red'
  }
})

export default CustomComponents