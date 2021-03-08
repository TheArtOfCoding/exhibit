import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Styles } from '../../styles';

export default function Button({ label, onPress }) {
  return (
    <TouchableOpacity
      style={Styles.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={Styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );
}
