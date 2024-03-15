import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const  PageDetail= () => {
    const {slug} = useLocalSearchParams();
  return (
    <View>
      <Text> PageDetail for id : {slug} </Text>
    </View>
  )
}

export default PageDetail