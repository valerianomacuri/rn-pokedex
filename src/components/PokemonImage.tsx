import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { SimplePokemon } from '../interfaces/PokemonInterfaces'

interface Props {
    pokemon: SimplePokemon
}



export const PokemonImage = ({pokemon}: Props) => {

    const windowWidth = Dimensions.get('window').width

    return (
        <View
                style={{
                    flex: 1,
                    width: windowWidth,
                    flexDirection: 'column',
                    alignItems: 'center',
                    elevation: 5,
                }}
            >
            <Text
                style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 30,
                    alignSelf: 'flex-start',
                    marginLeft: 20,
                }}
            >{pokemon.name.toUpperCase()}</Text>


            <Image
                source={{
                    uri: pokemon.picture
                }}
                style={{
                    width: 220,
                    height: 220,
                    position: 'absolute',
                    bottom: -30,
                    
                }}
            />

            <Image
                source={ require('../assets/pokebola-blanca.png') }
                style={{
                    width: 250,
                    height: 250,
                    opacity: .2,
                    position: 'absolute',
                    bottom: -50,
                    right: -50,
                    zIndex: -100
                    
                }}
            />

            </View>
    )
}

