import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthScreen from './screens/authScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Provider } from 'react-redux';

// import configureStore from './components/redux/store';

// import { connect } from 'react-redux';
// import updateData from './components/redux/actions/updateUserDataAction';
// import { bindActionCreators } from 'redux';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// const store = configureStore();

export default function App() {
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
  // setValue()
  // getValue()
  return (
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="auth">
            <Stack.Screen name="auth" component={AuthScreen} options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
  );
}

function MainScreen() {
  return (
    <NavigationContainer>
      <Text>SUS TEST PASSED</Text>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const mapStateToProps = (state) => {
//   return {
//     updateData: state.updateData
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   bindActionCreators({
//     updateData
//   }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);