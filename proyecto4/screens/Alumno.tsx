import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Lista from './components/Lista'
import { AppContext } from '../context/Context'
import InsertItem from './components/InsertItem'

const Alumno = () => {
    const { state, dispatch} = useContext(AppContext)
    const [alumno, onChangeAlumno] = React.useState("");

    const insertItem = (item: String) => {
        dispatch({ type: 'addAlumn', payload: item });
    };

    const deleteItem = (item: String) => {
        dispatch({ type: 'deleteAlumn', payload: item });
    };
  return (
    <View>
        <InsertItem action={insertItem} />
        <Lista header={"a"} state={state.alumnos} action={deleteItem}/>
    </View>
  )
}

export default Alumno

const styles = StyleSheet.create({})