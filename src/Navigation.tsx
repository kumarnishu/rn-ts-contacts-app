import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, NavigationProp } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

export type ScreenNames = ["home", "login", "register", "about", "welcome"] // type these manually

export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>()

export function SignInStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false, animation: 'none' }}>
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='about' component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

