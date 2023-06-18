import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigation } from '../Navigation'

const LoginScreen = () => {
  const { navigate } = useNavigation<StackNavigation>()
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button color={`#32cd32`} title="agree and continue" onPress={() => navigate('welcome')} />
    </View>
  )
}

export default LoginScreen