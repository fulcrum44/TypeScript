import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    header: String,
    state: String[],
    action: (Item: String) => void
}

const Lista = (props: Props) => {
  return (
    <View>
      {
        props.state.map((item) => {
            return (
                <View>
                    <Text key={"" + props.header + item}>{item}</Text>
                <Button
                    key ={"b" + item}
                    onPress={() => {props.action(item)}}
                    title=" Borrar Alumno"
                    color="#841584"
                />
                </View>
            )
        })
      }
    </View>
  )
}

export default Lista

const styles = StyleSheet.create({})