import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';

// const getPokemonList = async () => {
//   const res = await fetch('https://pokeapi.co/api/v2/pokemon', {
//     method: 'get',
//   });
//   const data = await res.json();
// };

const PokeDex = () => {
  // getPokemonList();
  return (
    <View style={styles.container}>
      <Text style={styles.requirement}>Welcome to pokedex !</Text>
      {/* <FlatList
        data={data}
        renderItem={item => <Text>hello</Text>}
        keyExtractor={item => item.id}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default PokeDex;
