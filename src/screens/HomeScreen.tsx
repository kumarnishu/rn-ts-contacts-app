import { View,  Alert, StyleSheet, TouchableHighlight, Text, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
    

      <TouchableOpacity onPress={() => Alert.alert('You tapped the button!')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>

      <TouchableNativeFeedback
        onPress={() => Alert.alert('You tapped the button!')}
        background={
          Platform.OS === 'android'
            ? TouchableNativeFeedback.SelectableBackground()
            : undefined
        }>  
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            TouchableNativeFeedback{' '}
            {Platform.OS !== 'android' ? '(Android only)' : ''}
          </Text>
        </View>
      </TouchableNativeFeedback>

      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});
export default HomeScreen 