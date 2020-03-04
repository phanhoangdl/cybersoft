/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import LoginUserComponent from './src/components/LoginUserComponent'
import FireBaseLoginComponent from './src/components/FireBaseLoginComponent';
import FeelingComponent from './src/components/FeelingComponent';

const App = () => {
  return (
    // <LoginUserComponent />
    // <FireBaseLoginComponent />
    <FeelingComponent />
  );
  
};


export default App;
