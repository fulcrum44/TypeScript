import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../context/Context';
import InsertItem from './components/InsertItem';
import Lista from './components/Lista';


const Proyecto = () => {
    const { state, dispatch } = useContext(AppContext);
    const [proyecto, onChangeProject] = React.useState("");

    const insertItem = (item: String) => {
        dispatch({ type: 'addProject', payload: item });
    };


    return (
        <View>
            <View>
                <InsertItem action={insertItem} />
                
                <Lista header={"a"} state={state.alumnos} dispatch={dispatch} type={"addProject"}/>
            </View>
            
        </View>
    )
}

export default Proyecto

const styles = StyleSheet.create({})
