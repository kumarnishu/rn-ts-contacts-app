import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NavigationType } from '../Navigation'

const AboutScreen = () => {
  const { navigate } = useNavigation<NavigationType>()
  return (
    <View>
      <Text>About Screen</Text>
      <Button color={`#32cd32`} title="Visit Home Page" onPress={() => navigate('home')} />
    </View>
  )
}

export default AboutScreen