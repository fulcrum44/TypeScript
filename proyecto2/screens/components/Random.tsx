import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../../context/Context'

const Random = () => {
    const { state, dispatch} = useContext(AppContext);

    const buildGroups = () => {
        let alumnosMapper = Array.from ( {length: state.alumnos.length}, (_,i) => {
            return {
                alumno : state.alumnos[i],
                orden: Math.floor(Math.random()*state.alumnos.length),
                usado: false
            }
        })
    }
    return (
        <View>
        <Text>Random</Text>
        </View>
    )
}

export default Random

const styles = StyleSheet.create({})