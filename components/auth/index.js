import React from 'react';
import { Text, View, Image } from 'react-native';
import Button from '../common/Button';
import { Styles } from '../../styles';

export default function index({ navigation }) {
  return (
    <View style={Styles.container}>
      <View>
        <Image
          style={Styles.circularImage}
          source={require('../../assets/logo.png')}
        />
        <Text style={Styles.titleText}>Exhibit</Text>
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          marginTop: 30,
        }}
      >
        <Button
          label='Register'
          onPress={() => navigation.navigate('Register')}
        />
        <Button label='Login' onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
}
