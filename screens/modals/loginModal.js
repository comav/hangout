import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import axios from 'axios';

export default function LoginModal() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      setEmail(text);
      return false;
    }
    else {
      setEmail(text);
      console.log("Email is Correct");
    }
  }

  async function setValue (key, value) {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      console.log(e);
    }
  }
  async function getValue (key) {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
        console.log(value);
      }
    } catch (e) {
      console.log(e)
    }
  }

  async function sendLoginRequest() {
    await fetch ('http://192.168.88.229:8642/login', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then((res) => console.warn(res))
    .then((res) => JSON.parse(res))
    .then((res) => setValue('userdata', res));
    await console.warn(getValue('userdata'));
  }

  return (
    <View>
      <Text style={styles.headerText}>Log in 🆔</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          label={'Email'}
          autoComplete={'email'}
          onChangeText={(text) => validate(text)}
        />
        <TextInput
          label={'Password'}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View>
        <Button title={'Log me in!'} onPress={() => 
          sendLoginRequest()
          }/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 36,
    marginTop: 150
  },
  inputWrapper: {
    width: '85%',
    display: 'flex',
    justifyContent: 'center',
  }
})