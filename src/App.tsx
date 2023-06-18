import {UserProvider } from "./contexts/UserContext";
import { SignInStack } from "./Navigation";

export default function App() {
    return (
        <UserProvider>
            <Main />
        </UserProvider>
    )

}
const Main = () => {
    return (
        <SignInStack />
    )
}