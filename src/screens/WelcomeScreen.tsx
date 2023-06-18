import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigation } from '../Navigation'

const WelcomeScreen = () => {
  const { navigate } = useNavigation<StackNavigation>()
  return (
    <View>
      <Text>Welcome</Text>
      <Button color={`#32cd32`} title="agree and continue" onPress={() => navigate('login')} />
    </View>
  )
}

export default WelcomeScreen