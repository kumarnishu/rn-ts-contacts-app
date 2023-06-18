import { StackNavigationProp } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerNavigator = createDrawerNavigator();

export type ScreenNames = ["home", "about"] // type these manually

export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type NavigationType = StackNavigationProp<RootStackParamList>;


export function SignInStack() {
  return (
    <NavigationContainer  >
      <DrawerNavigator.Navigator initialRouteName="home">
        <DrawerNavigator.Screen name="home" component={HomeScreen} />
        <DrawerNavigator.Screen name="about" component={AboutScreen} />
      </DrawerNavigator.Navigator>
    </NavigationContainer>
  );
  
}