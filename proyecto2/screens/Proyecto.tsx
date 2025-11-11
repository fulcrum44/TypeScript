import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../context/Context';


const Alumno = () => {
    const { state, dispatch } = useContext(AppContext);
    const [alumno, onChangeAlumno] = React.useState("");
    return (
        <View>
            <View>
                <TextInput
                    onChangeText={onChangeAlumno}
                    value={alumno}
                />
                <Button
                    onPress={() => dispatch({ type: "addAlumn", payload: alumno.toString() })}
                    title=" Agregar Alumno"
                    color="#841584"
                />
                
            </View>
            <List header = 'a' state= />
            
        </View>
    )
}

export default Alumno

const styles = StyleSheet.create({})
