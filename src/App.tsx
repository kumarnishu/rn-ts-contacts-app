import { Image, Text, TouchableOpacity, View } from "react-native";
import { NavigationStack } from "./Navigation";
import { ContactsProvider } from "./contexts/ContactsContext";

export default function App() {
    return (
        <ContactsProvider>
            <Main />
        </ContactsProvider>
    )
}
const Main = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
            <TouchableOpacity style={{ alignItems: 'flex-end', paddingTop: 5 }}>
                <Image
                    source={{ uri: "https://img.icons8.com/ios-filled/50/menu-2.png" }} style={{ height: 24, width: 24 }} />
            </TouchableOpacity>
            <NavigationStack />
        </View>
    )
}

