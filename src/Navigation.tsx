import { StackNavigationProp } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const StackBottomTabNavigator = createBottomTabNavigator();

export type ScreenNames = ["home", "about"] // type these manually

export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type NavigationType = StackNavigationProp<RootStackParamList>;


export function SignInStack() {
  return (
    <NavigationContainer  >
      <StackBottomTabNavigator.Navigator initialRouteName="home">
        <StackBottomTabNavigator.Screen name="home" component={HomeScreen} />
        <StackBottomTabNavigator.Screen name="about" component={AboutScreen} />
      </StackBottomTabNavigator.Navigator>
    </NavigationContainer>
  );
  
}