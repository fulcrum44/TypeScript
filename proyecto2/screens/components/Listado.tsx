import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Alumno } from '../../entities/Alumno'
import { Proyecto } from '../../entities/Proyecto'

interface Props{
    item: Alumno | Proyecto
    call: (id: String) => void
}

const Listado = (props: Props) => {
  return (
    <View>
        <Text>{props.item.nombre}</Text>
        <Button
            onPress={() => {props.call(props.item.id)}}
            title=" Borrar Alumno"
            color="#841584"
        />
    </View>
  )
}

export default Listado

const styles = StyleSheet.create({})