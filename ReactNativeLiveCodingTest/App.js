import React from 'react';
import {StyleSheet, View} from 'react-native';

import Home from './components/Home';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
});

export default App;
