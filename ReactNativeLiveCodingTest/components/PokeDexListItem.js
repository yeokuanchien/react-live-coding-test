import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const PokedexListItem = ({item, viewDetail}) => {
  return (
    <TouchableOpacity
      style={styles.pokedexListItem}
      onPress={() => {
        viewDetail(item);
      }}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pokedexListItem: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PokedexListItem;
