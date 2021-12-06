import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Header from './components/Header';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const [text, setText] = useState('');
  // const [isReady, setIsReady] = useState(false);

  return (
    <View className="App">
      <Header></Header>

      {/* <header className="App-header">
        <img
          hidden={!isReady}
          src="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png"
          className="App-logo"
          alt="logo"
          style={{padding: '10px'}}
        />
        <b>
          Requirement: Try to show the hidden image and make it clickable that
          goes to /pokedex when the input below is "Ready!" remember to hide the
          red text away when "Ready!" is in the textbox.
        </b>
        <p>Are you ready to be a pokemon master?</p>
        <input type="text" name="name" />
        <span style={{color: 'red'}}>I am not ready yet!</span>
      </header> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
