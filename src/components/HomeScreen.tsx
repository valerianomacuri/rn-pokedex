import React from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { PokemonCard } from './PokemonCard'

const HomeScreen = () => {

    const {isLoading, simplePokemonList, loadPokemons} = usePokemonPaginated()


    return (
            <View style={ styles.container }>

            <Image
                source={ require('../assets/pokebola.png')}
                style={ styles.pokebola }
            />

            <FlatList 
                data={ simplePokemonList }
                keyExtractor={ (pokemon) => pokemon.id }
                numColumns={ 2 }
                renderItem={ ({ item }) => <PokemonCard pokemon={ item } /> }
                ListHeaderComponent={(
                    <Text style={ styles.titulo }>Pokedex</Text>
                )}

                // Infinity Scroll
                onEndReached={ loadPokemons }
                onEndReachedThreshold={ 0.4 }

                ListFooterComponent={ ( <ActivityIndicator style={{ height: 50 }} size={ 30 } /> ) }
            />


 
            </View>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        // padding: 10,
        // paddingBottom: 0,
    },
    pokebola: {
        position: 'absolute',
        width: 300,
        height: 300,
        top: -100,
        right: -100,
        opacity: 0.2,
    },
    titulo: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 35,
        color: '#333',
        marginLeft: 10,
    }

})
