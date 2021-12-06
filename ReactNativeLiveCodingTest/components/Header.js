import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold'}}>
        Requirement: Try to show the hidden image and make it clickable that
        goes to /pokedex when the input below is "Ready!" remember to hide the
        red text away when "Ready!" is in the textbox.
      </Text>
      <Text> Are you ready to be a pokemon master?</Text>

      <TextInput style={styles.input} placeholder="useless placeholder" />
      {/* <span style={{color: 'red'}}>I am not ready yet!</span> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Header;
