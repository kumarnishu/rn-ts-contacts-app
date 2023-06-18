import { useContext } from "react";
import { UserContext, UserProvider } from "./contexts/UserContext";
import { SignInStack, SignOutStack } from "./Navigation";

export default function App() {
    return (
        <UserProvider>
            <Main />
        </UserProvider>
    )

}
const Main = () => {
    const { user } = useContext(UserContext)
    return (
        <>
            {user ? <SignInStack /> : <SignOutStack />}
        </>
    )
}