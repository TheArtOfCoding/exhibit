import React, { useState } from 'react';
import { CheckBox, View, Text } from 'react-native';
import TextInput from '../common/TextInput';
import Button from '../common/Button';
import { Styles } from '../../styles';

export default function Form() {
  const [isSelected, setSelection] = useState(false);
  const [stallName, setStallName] = useState('');
  const [contactPersonName, setContactPersonName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [notes, setNotes] = useState('');
  return (
    <View style={Styles.container}>
      <Text style={Styles.titleText}>Stall Detail Form</Text>
      <TextInput
        icon='shop'
        placeholder='Stall Name'
        autoCapitalize='none'
        keyboardAppearance='dark'
        returnKeyType='next'
        returnKeyLabel='next'
        value={stallName}
        onChangeText={(stallName) => setStallName(stallName)}
      />
      <TextInput
        icon='user'
        placeholder='Contact person name'
        autoCapitalize='none'
        keyboardAppearance='dark'
        returnKeyType='next'
        returnKeyLabel='next'
        value={contactPersonName}
        onChangeText={(contactPersonName) =>
          setContactPersonName(contactPersonName)
        }
      />
      <TextInput
        icon='mobile'
        placeholder='Contact person phone number'
        keyboardType='numeric'
        keyboardAppearance='dark'
        returnKeyType='next'
        returnKeyLabel='next'
        value={phoneNumber}
        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
      />
      <View style={Styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={Styles.checkbox}
        />
        <Text style={Styles.label}>Is this your WhatsApp number?</Text>
      </View>
      <TextInput
        icon='list'
        style={Styles.textArea}
        placeholder='Additional Notes'
        multiline={true}
        numberOfLines={10}
        keyboardAppearance='dark'
        returnKeyType='next'
        returnKeyLabel='next'
        value={notes}
        onChangeText={(notes) => setNotes(notes)}
      />
    </View>
  );
}
