import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';
import { store } from './redux/store';

import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/auth/index';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import MainScreen from './components';

const Stack = createStackNavigator();
// Kept just to hide the unwanted warning popups in application.
console.disableYellowBox = true;

const firebaseConfig = {
  apiKey: 'AIzaSyBrvonAUyW0QppKbxM_p3JTSuRDrFgSK1M',
  authDomain: 'exhibit-staging.firebaseapp.com',
  databaseURL: 'https://exhibit-staging-default-rtdb.firebaseio.com',
  projectId: 'exhibit-staging',
  storageBucket: 'exhibit-staging.appspot.com',
  messagingSenderId: '991479585768',
  appId: '1:991479585768:web:916882e7d284309f41e25d',
  measurementId: 'G-C8NCRNTJKL',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export default class App extends Component {
  state = {
    loaded: false,
  };

  styles = StyleSheet.create({
    loader: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }

  render() {
    const { loggedIn, loaded } = this.state;

    if (!loaded) {
      return (
        <View style={this.styles.loader}>
          <Text>Loading...</Text>
        </View>
      );
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Landing'>
            <Stack.Screen
              name='Landing'
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Login' component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Landing'>
            <Stack.Screen name='Exhibit' component={MainScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
