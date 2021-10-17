import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { PokemonFull } from '../interfaces/PokemonInterfaces'
import Icon from 'react-native-vector-icons/Ionicons'

interface Props {
    pokemon: PokemonFull;
    bgColor: string
}

export const PokemonDetails = ({ pokemon, bgColor }: Props) => {


    const types = pokemon.types.map(({type}) => type.name)
    const moves = pokemon.abilities.map(({ability}) => ability.name)


    return (
        
                <View
                    style={{
  
                        paddingTop: 30,
                        paddingHorizontal: 20,

                        width: '100%',
                        height: '100%',
                        flexDirection: 'row',
                    }}
                >
                    <View style={styles.container}>
                        <Text style={{ ...styles.subtitle, color: bgColor }}>About</Text>
                        <View
                            style={styles.subcontainer}
                        >
                            <Icon name='ios-barbell-outline' size={ 30 } style={{marginRight: 20,}}/>
                            <Text>{pokemon.weight / 10} kg</Text>
                        </View>
                        <View
                            style={ styles.subcontainer}
                        >
                            <Icon name='paw-outline' size={30} style={{marginRight: 20,}}/>
                            <Text>{pokemon.height / 10} m</Text> 
                        </View>  
                    </View>

                    <View style={styles.container}>
                        <Text style={{ ...styles.subtitle, color: bgColor }}>Types</Text>
                        {
                            types.map((item) => (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                    }}
                                >
                                       <View>
                                            <Text
                                                style={{
                                                    color: '#fff',
                                                    backgroundColor: bgColor,
                                                    borderRadius: 50,
                                                    paddingVertical: 5,
                                                    paddingHorizontal: 10,
                                                    marginBottom: 20,
                                                }}
                                            >{item.charAt(0).toUpperCase() + item.slice(1)}</Text>
                                        </View> 
                                </View>
                            ))
                        }

                        <Text style={{ ...styles.subtitle, color: bgColor }}>Moves</Text>
                        {
                            moves.map((item) => (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap'
                                    }}
                                >
                                    <View>
                                        <Text
                                            style={{
                                                marginBottom: 10,
                                            }}
                                        >{item.charAt(0).toUpperCase() + item.slice(1)}</Text>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                   

                    {/* Sprites */}

                    {/* <View>
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
                    </View> */}


                </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // width: '50%',
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: 'red',
    },
    subtitle: {
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    }
})