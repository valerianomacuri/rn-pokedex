import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import PokemonScreen from '../components/PokemonScreen';
import { SimplePokemon } from '../interfaces/PokemonInterfaces';

export type RootStackParams = {
  HomeScreen: undefined,
  PokemonScreen: { simplePokemon: SimplePokemon, color: string }
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        }        
      }}
    >
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="PokemonScreen" component={ PokemonScreen } />
    </Stack.Navigator>
  );
}