import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import firebase from 'firebase';

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
      <View>
        <TextInput
          placeholder='Name'
          onChangeText={(name) => this.setState({ name })}
        />
        <TextInput
          placeholder='Email'
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder='Password'
          onChangeText={(password) => this.setState({ password })}
          secureTextEntry
        />

        <Button onPress={() => this.onSignUp()} title='Sign Up' />
      </View>
    );
  }
}
