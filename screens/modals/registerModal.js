import React, { useState } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-paper';
import HeaderText from '../../components/headerText';

export default function RegisterModal() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordSecondTime, setPasswordSecondTime] = useState('');
  const [headerText, setHeaderText] = useState('Join us 😎');
  async function sendRegisterRequest() {

    if (firstName || lastName || email || password || passwordSecondTime == '') {
      setHeaderText('Please fill \n out everything 🤐')
      return;
    }

    if (password !== passwordSecondTime) {
      setHeaderText('Please check your password 😯')
    }

    async function setValue (key, value) {
      try {
        await AsyncStorage.setItem(key, value)
      } catch (e) {
        console.log(e);
      }
    }

    await fetch('http://192.168.88.229:8642/register', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
      })
    })
    .then((res) => console.warn(res))
      .then((res) => JSON.parse(res))
      .then((res) => setValue('userdata', res));
      await console.warn(getValue('userdata'));
  }
  return (
    <View style={styles.modalWrapper}>
      <HeaderText text={headerText} />
      <View>
        <View style={styles.horizontalWrapper}>
        <TextInput
          label={'First name'}
          style={{width: '50%'}}
          onChangeText={(text) => setFirstName(text)}  
        />
        <TextInput
          label={'Last name'}
          style={{width: '50%'}}
          onChangeText={(text) => setLastName(text)} 
        />
        </View>
        <TextInput label={'Email'} onChangeText={(text) => setEmail(text)} />
        <TextInput label={'Password'} secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
        <TextInput label={'Password one more time'} secureTextEntry={true} onChangeText={(text) => setPasswordSecondTime(text)} />
        <Button title={'Sign up!'} onPress={() => sendRegisterRequest()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  modalWrapper: {
    display: 'flex',

  },
  horizontalWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',

  }
})