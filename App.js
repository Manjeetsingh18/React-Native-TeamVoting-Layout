/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import RootConatiner from './src';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RootConatiner />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
