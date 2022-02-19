import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function HeaderText(props) {
  return (
    <Text style={styles.headerText}>{props.text}</Text>
  )
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 36, 
    marginTop: 150
  }
})