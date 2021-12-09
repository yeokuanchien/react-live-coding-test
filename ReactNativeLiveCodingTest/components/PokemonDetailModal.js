import React from 'react';
import {Image, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import CustomBarChart from '../components/customBarChart';
import CustomTable from '../components/customTable';

const PokemonDetailModal = ({modalVisible, closeModal, pokemon}) => {
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
            <CustomBarChart pokemonStats={pokemon.stats} />
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

export default PokemonDetailModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  modalView: {
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
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
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  image: {
    height: 100,
    width: 100,
  },
});
