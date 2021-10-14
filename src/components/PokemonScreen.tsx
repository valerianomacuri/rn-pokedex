import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { RootStackParams } from '../navigator/Navigator'
import { PokemonImage } from './PokemonImage'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

const windowWidth = Dimensions.get('window').width

const windowHeight = Dimensions.get('window').height

const PokemonScreen = ( { navigation, route}: Props ) => {
    
    const { simplePokemon, color } = route.params
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: color,
            }}
        >
            <TouchableOpacity
                onPress={ () => navigation.goBack() }
                style={{
                    alignSelf: 'flex-start',
                    marginLeft: 20,
                    marginTop: 10,
                }}
            >
                <Icon name='arrow-back' color='#fff' size={ 35 }/>
            </TouchableOpacity>

            <PokemonImage pokemon={ simplePokemon } />

            <View
                style={{
                    backgroundColor: '#fff',
                    flex: 1,
                    width: windowWidth,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    elevation: 2,
                    zIndex: -1000,
                }}
            >

            </View>
        </View>
    )
}

export default PokemonScreen

const styles = StyleSheet.create({})
