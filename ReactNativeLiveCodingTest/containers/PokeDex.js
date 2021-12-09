import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import CustomBarChart from '../components/customBarChart';
import CustomTable from '../components/customTable';

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

const PokemonDetailModal = ({modalVisible, closeModal, pokemon}) => {
  console.log(pokemon.stats);
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={styles.image}
              source={{
                uri: pokemon.sprites.front_default,
              }}
            />
            <CustomTable pokemonStats={pokemon.stats} />
            <CustomBarChart />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={closeModal}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
  pokedexListItem: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
});

export default PokeDex;
