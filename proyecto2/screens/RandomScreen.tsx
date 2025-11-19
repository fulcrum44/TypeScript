import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Context';
import Lista from './components/Lista';
import Listado from './components/Listado';
import { Alumno } from '../entities/Alumno';
import { Proyecto } from '../entities/Proyecto';
import uuid from 'react-native-uuid';


interface AlumnoRandom {
    alumno: Alumno
    orden: number
    usado: boolean
}

interface Grupo {
    proyecto: Proyecto
    miembros: Alumno[]
}

const RandomScreen = () => {
    const { state, dispatch } = useContext(AppContext);
    const [ listaAlumnos, setlistaAlumnos] = useState<AlumnoRandom[]>([])
    const [ grupos, setGrupos] = useState<Grupo[]>([])
    

    const buildGroups = ()=> {
        let alumnosMapper = Array.from( { length: state.alumnos.length }, (_,i) => {
            return {
                alumno: state.alumnos[i],
                orden: Math.floor(Math.random()*state.alumnos.length),
                usado: false
            }
        });

        let alumnos = alumnosMapper.map( (item,i) => {
            
            let elemento = alumnosMapper.find((e) => e.orden < item.orden && e.usado == false);
            console.log(elemento);
            if (elemento !== undefined) {
                const j = alumnosMapper.indexOf(elemento);
                alumnosMapper[j] = item;
                elemento.usado = true;
                item.usado = true;
                return elemento;
            }
            return item;
        });

        console.log(alumnos);

        setlistaAlumnos(alumnos)

        let grupos : Grupo[] = Array.from( {length: state.proyectos.length}, (_,i) => {
            return {
                proyecto: state.proyectos[i],
                miembros: []
            }
        })

        alumnos.forEach((alumno, i) => {
            const indiceGrupo = i % grupos.length

            const grupoActual = grupos[indiceGrupo];

            if (grupoActual.miembros.length < 2) {
                grupoActual.miembros.push(alumno.alumno)
            }
        })

        // console.log(grupos)
        // El 'null, 2' es para que haga saltos de línea y sangría (pretty print)
        // console.log(JSON.stringify(grupos, null, 2));

        setGrupos(grupos);

    }
    
    return (
        <View>
            <Button
                onPress={() => buildGroups()}
                title="Repartir"
                color="#841584"
            />
            <View style={{justifyContent: 'space-evenly', margin: 10}}>
                <FlatList
                data={grupos}
                renderItem={({item}) => (
                <View style={styles.grupos}>
                    <View style={{backgroundColor: '#556b2f'}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>{item.proyecto.nombre}</Text>
                    </View>
                    {item.miembros.map((miembro, i) => (
                        <Text>{miembro.nombre}</Text>
                    ))}
                </View>
                )}
                keyExtractor={item => item.proyecto.id.toString()}
             />
            </View>
            
        </View>
    )
}

export default RandomScreen

const styles = StyleSheet.create({
    grupos: {
        // padding: 10,
        margin: 20,
        backgroundColor: 'beige',
        borderWidth: 3,
        borderRadius: 10
    }
})