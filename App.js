/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import codePush from "react-native-code-push";


const App = () => {
  
  return (
    <View style={{flex:1,backgroundColor:'aqua',justifyContent: 'center',alignItems: 'center'}}>
      <Text>Demo</Text>
    </View>
  );
};



export default codePush(App);
