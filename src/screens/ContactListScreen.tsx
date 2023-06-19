import { View, Text, PermissionsAndroid, ScrollView, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Contacts from 'react-native-contacts';
import { ContactsContext } from '../contexts/ContactsContext';


const ContactListScreen = () => {
  const [loading, setLoading] = useState(false)
  const { contacts, setContacts } = useContext(ContactsContext)


  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.',
        'buttonPositive': 'Please accept bare mortal'
      }
    ).then(async () => {
      setLoading(true)
      await Contacts.getAll().then((data) => {
        setContacts(data)
        setLoading(false)
      }).catch((err) => console.log(err))
    }).catch((err) => console.log(err))
  }, [])

  return (
    <>
      {
        loading ? <Text>loading.....</Text> :
          <View style={{ padding: 5 }}>
            <ScrollView>
              {contacts && contacts.map((contact, index) => {
                return (
                  <View key={index} style={{ padding: 10, display: 'flex', flexDirection: 'row', borderBottomWidth: 1, gap: 20, alignItems: 'center', borderBottomColor: 'lightgrey' }}>
                    <Image source={{ uri: contact.hasThumbnail ? contact.thumbnailPath : "https://img.icons8.com/fluency/48/user-male-circle.png" }} style={{ height: 38, width: 38, borderRadius: 50 }} />
                    <View>
                      <Text style={{ fontSize: 18, color: 'black' }} >{contact.displayName}</Text>
                      <Text style={{ fontSize: 12, color: 'grey' }} >{contact.phoneNumbers[0] && contact.phoneNumbers[0].number}</Text>
                    </View>
                  </View>
                )
              })}
            </ScrollView >
          </View >
      }

    </>
  )
}


export default ContactListScreen