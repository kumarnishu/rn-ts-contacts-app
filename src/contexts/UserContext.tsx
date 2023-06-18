import React, { useState } from "react"

export interface IUser {
    phone: number,
    dp: String,
    name: String
}

type UserState = IUser | undefined

type Context = {
    user: UserState,
    setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>
}

export const UserContext = React.createContext<Context>({
    user: undefined,
    setUser: () => null
})

export const UserProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<IUser | undefined>()
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}