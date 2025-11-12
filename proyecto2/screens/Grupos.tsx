import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../context/Context'

const Grupos = () => {
    const grupos: String[] = []

    const {state, dispatch} = useContext(AppContext)

    return (
        <View>
        <Text>Grupos</Text>

        </View>
    )
}

export default Grupos

const styles = StyleSheet.create({})