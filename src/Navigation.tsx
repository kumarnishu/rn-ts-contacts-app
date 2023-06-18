import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RecentContactsScreen from './screens/RecentContactsScreen';
import ContactListScreen from './screens/ContactListScreen';


const Navigator = createMaterialTopTabNavigator();

export type ScreenNames = ["contacts", "recents"] // type these manually

export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type NavigationType = StackNavigationProp<RootStackParamList>;


export function SignInStack() {
  return (
      <NavigationContainer  >
      <Navigator.Navigator initialRouteName="recents">
          <Navigator.Screen name="recents" component={RecentContactsScreen} />
          <Navigator.Screen name="contacts" component={ContactListScreen} />
        </Navigator.Navigator>
      </NavigationContainer>
  );
}