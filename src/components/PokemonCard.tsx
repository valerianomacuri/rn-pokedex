import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImageColors from "react-native-image-colors";
import { SimplePokemon } from "../interfaces/PokemonInterfaces";

const windowWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({pokemon}: Props) => {

    const [bgColor, setBgColor] = useState('grey')
    const isMounted = useRef(true)
    const navigation = useNavigation()

    useEffect(() => {
        ImageColors.getColors( pokemon.picture, { fallback: 'grey' })
            .then( colors => {

                if( !isMounted.current ) return

                switch (colors.platform) {
                    case 'android':
                        // android result properties
                        setBgColor( colors.dominant || 'grey' )
                        break
                    case 'ios':
                        // iOS result properties
                        setBgColor( colors.background || 'grey' )
                        break
                    default:
                        throw new Error('Unexpected platform key')
                    }
            })
        return () => {
            isMounted.current = false
        }

    }, [])

    return (
        <TouchableOpacity
            activeOpacity={ 0.9 }
            onPress={ () => navigation.navigate('PokemonScreen', { 
                simplePokemon: pokemon,
                color: bgColor,
                })
            }
        >
            <View style={{ 
                    ...styles.container,
                    backgroundColor: bgColor,
                }}>
                <Text style={ styles.nombre }>
                    { pokemon.name.toUpperCase() }
                    { '\n#' + pokemon.id }
                    </Text>
                <Image source={{ uri: pokemon.picture }} style={{ 
                    width: 90, 
                    height: 90,
                    alignSelf: 'flex-end',
                }} />
                <Image 
                 source={ require('../assets/pokebola-blanca.png')}
                 style={{
                     width: 110,
                     height: 110,
                     position: 'absolute',
                     opacity: 0.2,
                     right: -20,
                     bottom: -20, 
                     zIndex: -100,
                 }}
                />

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: (windowWidth * 0.5) - 15,
        height: (windowWidth * 0.4) - 15,
        borderRadius: 20,
        marginBottom: 10,
        marginLeft: 10,
        justifyContent: 'space-between',
        elevation: 10,

        // Sombras en IOS

        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 5,
        //     height: 5,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 20,
    },

    nombre: {
        color: '#fff',
        marginLeft: 15,
        marginTop: 15,
        fontSize: 12,
    }
})