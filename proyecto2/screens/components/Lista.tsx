import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Action } from '../../context/Context'

interface Props {
  header: String,
  state: String[],
  dispatch: React.Dispatch<Action>
  type: Action
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
                onPress={() => (...props.type, payload: dispatch)}
                title=" Borrar Alumno"
                color="#841584"
            />
          </View>
      )
      })}
    </View>
  )
}

export default Lista
 
const styles = StyleSheet.create({})