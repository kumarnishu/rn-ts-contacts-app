import { View, Text, PermissionsAndroid, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Contacts from 'react-native-contacts';


const ContactListScreen = () => {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([])

  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.',
        'buttonPositive': 'Please accept bare mortal'
      }
    ).then(async () => {
      await Contacts.getAll().then((data) => setContacts(data)).catch((err) => console.log(err))
    }).catch((err) => console.log(err))
  }, [contacts])

  return (
    <View>
      <ScrollView>
        {contacts && contacts.map((contact, index) => {
          return (
            <Text key={index}>{index + 1} : {contact.displayName}</Text>
          )
        })}
      </ScrollView>
    </View >
  )
}

export default ContactListScreen