import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RecentContactsScreen from './screens/RecentContactsScreen';
import ContactListScreen from './screens/ContactListScreen';
import { Image, View } from 'react-native';


const Navigator = createMaterialTopTabNavigator();

export type ScreenNames = ["contacts", "recents"] // type these manually

export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type NavigationType = NativeStackNavigationProp<RootStackParamList>;


export function NavigationStack() {
  return (
    <NavigationContainer  >
      <Navigator.Navigator initialRouteName="contacts"
        screenOptions={
          ({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let Icon: JSX.Element | null = null
              if (route.name === 'recents') {
                Icon = focused
                  ? <Image source={{ uri: "https://img.icons8.com/parakeet/48/clock.png" }} style={{ height: 48, width: 48 }} />
                  : <Image source={{ uri: "https://img.icons8.com/ios/50/clock--v1.png" }} style={{ height: 42, width: 42 }} />
              }
              else if (route.name === 'contacts') {
                Icon = focused ?
                  <Image source={{ uri: "https://img.icons8.com/fluency/48/contact-card.png" }} style={{ height: 40, width: 40 }} />
                  : <Image source={{ uri: "https://img.icons8.com/ios/50/contact-card.png" }} style={{ height: 40, width: 40 }} />
              }

              // You can return any component that you like here!
              return (
                <View >
                  {Icon}
                </View>
              )
            },
            tabBarLabel: "",
            tabBarStyle: { backgroundColor: 'royalblue', display: 'flex', width: '100%', justifyContent: 'center' }
          })

        }
      >
        <Navigator.Screen name="recents" component={RecentContactsScreen} />
        <Navigator.Screen name="contacts" component={ContactListScreen} />
      </Navigator.Navigator>
    </NavigationContainer >
  );
}