import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {Text, View, StyleSheet, Button} from 'react-native';
import { Modal } from "react-native";
import LoginModal from './modals/loginModal';
import RegisterModal from "./modals/registerModal";

export default function AuthScreen(props) {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  return (
    <View style={styles.screenWrapper}>
      <Modal animationType="slide" visible={loginModalOpen}>
        <Button onPress={() => setLoginModalOpen(false)} title='close'/>
        <LoginModal />
      </Modal>
      <Modal animationType="slide" visible={registerModalOpen}>
        <Button onPress={() => setRegisterModalOpen(false)} title='close' />
        <RegisterModal />
      </Modal>
      <Text style={styles.headerText}>Hello there! 👋</Text>
      <View style={styles.buttonWrapper}>
        <Button style={styles.button} title="Log in" onPress={() => setLoginModalOpen(true)} />
        <Text style={styles.textBeetweenButtons}>or</Text>
        <Button style={styles.button} title="Sign up" onPress={() => setRegisterModalOpen()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenWrapper: {
    display: "flex",
    alignItems: "center",
  },
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 36, 
    marginTop: 150
  },
  buttonWrapper: {
    width: '100%',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 250,
  },
  textBeetweenButtons: {
    margin: 20,
  },
})