import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { PokemonFull } from '../interfaces/PokemonInterfaces'

interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetails = ({ pokemon }: Props) => {


    const tipos = pokemon.types.map(({type}) => type.name)
    const habilidades = pokemon.abilities.map(({ability}) => ability.name)


    return (
        
                <View
                    style={{
  
                        paddingTop: 30,
                        paddingLeft: 20,

                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Text
                        style={styles.subtitle}
                    >Species: {tipos.toString()} </Text>
                    <Text
                        style={styles.subtitle}
                    >Weight:  { pokemon.weight } Kg </Text>
                    <Text
                        style={styles.subtitle}
                    >Sprites:</Text>
                    <View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            
                            <Image source={{ uri: pokemon.sprites.front_default }} style={{width: 100, height: 100, marginRight: 25,}}/> 
                            <Image source={{ uri: pokemon.sprites.back_default }} style={{width: 100, height: 100, marginRight: 25,}}/> 
                            <Image source={{ uri: pokemon.sprites.front_shiny }} style={{width: 100, height: 100, marginRight: 25,}}/> 
                            <Image source={{ uri: pokemon.sprites.back_shiny }} style={{width: 100, height: 100, marginRight: 25,}}/> 
                        </ScrollView>
                    </View>
                    <Text
                        style={styles.subtitle}
                    >Initial Abilities: {habilidades.toString()} </Text>

                </View>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        fontWeight: 'bold',
        marginBottom: 10,
    }
})