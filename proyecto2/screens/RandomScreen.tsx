import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Context';
import Lista from './components/Lista';

const RandomScreen = () => {
    const { state, dispatch } = useContext(AppContext);
    const [ listaAlumnos, setlistaAlumnos] = useState([])
    

    const buildGroups = ()=> {
        let groups = Array.from( {length: state.proyectos.length}, (_,i) => {
            return {
                proyecto: state.proyectos[i],
                miembros: [] as String[]
            }
        });

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


        alumnos.forEach((alumno, i) => {
            const group = i % state.proyectos.length;
            groups[group].miembros.push(alumno.alumno.nombre);
        })
        
        console.log(groups);

    }

    return (
        <View>
            <FlatList
                data={props.state}
                renderItem={({item}) => (
                <Listado item={item} call={props.delete}/>
                )}
                keyExtractor={item => item.id.toString()}
             />
            
        </View>
    )
}

export default RandomScreen

const styles = StyleSheet.create({})