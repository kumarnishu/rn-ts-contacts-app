import { View, Text, PermissionsAndroid, ScrollView, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Contacts from 'react-native-contacts';
import { ContactsContext } from '../contexts/ContactsContext';


const RecentContactsScreen = () => {
  const { contacts } = useContext(ContactsContext)
  return (
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
  )
}

export default RecentContactsScreen