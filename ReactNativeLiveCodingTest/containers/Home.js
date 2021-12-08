import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Home = ({navigation}) => {
  const [text, setText] = useState('');
  const [isReady, setIsReady] = useState(false);

  const checkReadiness = v => {
    setText(v);
    setIsReady(v === 'Ready!');
  };

  return (
    <View style={styles.container}>
      {isReady && (
        <TouchableOpacity
          onPress={() => {
            console.log('sdf');
            navigation.navigate('Pokedex');
          }}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://www.freeiconspng.com/uploads/file-pokeball-png-0.png',
            }}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.requirement}>
        Requirement: Try to show the hidden image and make it clickable that
        goes to /pokedex when the input below is "Ready!" remember to hide the
        red text away when "Ready!" is in the textbox.
      </Text>
      <Text> Are you ready to be a pokemon master?</Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={checkReadiness}
          value={text}
        />
        {!isReady && (
          <Text style={styles.inlineError}>I am not ready yet!</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    alignItems: 'center',
  },
  requirement: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    height: 100,
    width: 100,
  },
  inlineError: {
    color: 'red',
  },
});

export default Home;
