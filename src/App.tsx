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
        <NavigationStack />
    )
}

