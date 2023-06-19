import React, { useState } from "react"
import { Contact } from "react-native-contacts"

type ContactsState = Contact[] | undefined

type Context = {
    contacts: ContactsState,
    setContacts: React.Dispatch<React.SetStateAction<Contact[] | undefined>>
}

export const ContactsContext = React.createContext<Context>({
    contacts: undefined,
    setContacts: () => null
})

export const ContactsProvider = ({ children }: { children: JSX.Element }) => {
    const [contacts, setContacts] = useState<Contact[] | undefined>()
    return (
        <ContactsContext.Provider value={{ contacts, setContacts }}>
            {children}
        </ContactsContext.Provider>
    )
}