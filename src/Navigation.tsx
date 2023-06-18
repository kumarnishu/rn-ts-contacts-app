import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { NavigationContainer } from '@react-navigation/native';

const StackNavigator = createStackNavigator();
export type ScreenNames = ["home", "about"] // type these manually

export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = StackNavigationProp<RootStackParamList>;


export function SignInStack() {
  return (
    <NavigationContainer  >
      <StackNavigator.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
        <StackNavigator.Screen name="home" component={HomeScreen} />
        <StackNavigator.Screen name="about" component={AboutScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}