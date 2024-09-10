import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16')
    .required('Length is Required'),
});

export default function App() {
  const [passward, setpassward] = useState('');
  const [isPassgenerated, setisPassgenerated] = useState(false);
  return (
    <View>
      <Text>Shree Ganesha</Text>
      <Text>Shree Ganesha</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {},
});
