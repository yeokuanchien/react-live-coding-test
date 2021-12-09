import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './containers/Home';
import PokeDex from './containers/PokeDex';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pokedex">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pokedex" component={PokeDex} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
