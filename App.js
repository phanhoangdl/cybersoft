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
import SunglassesShopComponent from './src/components/SunglassesShopComponent';

const App = () => {
  return (
    // bài tập giao diện login trường học
    // <LoginUserComponent />
    
    // bài tập giao diện login Firebase app
    // <FireBaseLoginComponent />
    
    //bài tập setState emoji
    <FeelingComponent />
  );
  
};


export default App;
