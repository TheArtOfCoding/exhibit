import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { Styles } from '../../styles';

export default class Register extends Component {
  state = {
    email: '',
    password: '',
    name: '',
  };

  onSignUp = () => {
    const { email, password, name } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection('users')
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
          });
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <View style={Styles.container}>
        <TextInput
          icon='user'
          placeholder='Enter your name'
          onChangeText={(name) => this.setState({ name })}
        />
        <TextInput
          icon='mail'
          placeholder='Enter your email'
          autoCapitalize='none'
          autoCompleteType='email'
          keyboardType='email-address'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          icon='key'
          placeholder='Enter your password'
          secureTextEntry
          autoCompleteType='password'
          autoCapitalize='none'
          keyboardAppearance='dark'
          returnKeyType='go'
          returnKeyLabel='go'
          onChangeText={(password) => this.setState({ password })}
        />

        <Button onPress={this.onSignUp} label='Sign Up' />
      </View>
    );
  }
}
