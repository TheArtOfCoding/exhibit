import React, { Component } from 'react';
import { Button as RnButton, View } from 'react-native';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import { Styles } from '../../styles';

import firebase from 'firebase';

export class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onSignUp = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={Styles.container}>
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

        <Button onPress={this.onSignUp} label='Sign In' />
      </View>
    );
  }
}

export default Login;
