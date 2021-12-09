import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import PokedexListItem from '../components/PokeDexListItem';
import PokemonDetailModal from '../components/PokemonDetailModal';

const PokeDex = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getPokemonList().then(items => setItems(items));
  }, []);

  const getPokemonList = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon', {
      method: 'get',
    });
    const data = await res.json();
    return data.results;
  };

  const getPokemonDetail = async item => {
    const res = await fetch(item.url, {
      method: 'get',
    });
    const data = await res.json();
    setPokemonDetail(data);
    setModalVisible(true);
    return data;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.requirement}>Welcome to pokedex !</Text>
      {pokemonDetail && (
        <PokemonDetailModal
          modalVisible={modalVisible}
          pokemon={pokemonDetail}
          closeModal={() => {
            setModalVisible(false);
          }}
        />
      )}
      <FlatList
        data={items}
        renderItem={({item}) => {
          return <PokedexListItem item={item} viewDetail={getPokemonDetail} />;
        }}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PokeDex;
