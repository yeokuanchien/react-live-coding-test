import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Header from './components/Header';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const [text, setText] = useState('');
  // const [isReady, setIsReady] = useState(false);

  return (
    <View style={styles.container}>
      <Header />

      {/* <header className="App-header">
        <img
          hidden={!isReady}
          src="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png"
          className="App-logo"
          alt="logo"
          style={{padding: '10px'}}
        />
    
     
 
      </header> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default App;
