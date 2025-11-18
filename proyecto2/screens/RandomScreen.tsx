import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Context';
import Lista from './components/Lista';
import Listado from './components/Listado';
import { Alumno } from '../entities/Alumno';
import { Proyecto } from '../entities/Proyecto';

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

        let gruposMapper = Array.from( {length: state.proyectos.length}, (_,i) => {
            return {
                proyecto: state.proyectos[i],
                miembros: alumnos
            }
        });

        let grupos = gruposMapper.map( (item,) => {

        })


        // alumnos.forEach((alumno, i) => {
        //     const group = i % state.proyectos.length;
        //     groups[group].miembros.push(alumno.alumno.nombre);
        // })
        
        // console.log(groups);

    }
    
    return (
        <View>
            <Button
                onPress={buildGroups}
                title="Repartir"
                color="#841584"
            />
            <FlatList
                data={listaAlumnos}
                renderItem={({item}) => (
                <Text>{item.alumno.nombre}</Text>
                )}
                keyExtractor={item => item.alumno.id.toString()}
             />
            
        </View>
    )
}

export default RandomScreen

const styles = StyleSheet.create({})