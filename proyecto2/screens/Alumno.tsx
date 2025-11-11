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

            <View>
                {
                state.alumnos.map((item) => {
                return (
                    <View>
                        <Text key={"a" + item}>{item}</Text>
                        <Button
                            key ={"b" + item}
                            onPress={() => dispatch({ type: "deleteAlumn", payload: alumno.toString() })}
                            title=" Borrar Alumno"
                            color="#841584"
                        />
                    </View>
                )
                })}
            </View>
        </View>
    )
}

export default Alumno

const styles = StyleSheet.create({})
