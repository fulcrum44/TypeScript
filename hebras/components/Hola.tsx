import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Post } from '../entities/Post'
import { ServerPost } from '../entities/mappers/ServerPost';
import { PostMapper } from '../entities/mappers/PostMapper';

const Hola = () => {

    const [saludo, setSaludo] = useState("Cargando...");
    const [loading, setLoading] = useState<boolean>(true);
    const [datos, setDatos] = useState<Post[]>([]);

    const saludo1 = () => {
        return new Promise<number>(async () => {
            fetch("https://jsonplaceholder.typicode.com/posts").then(
                (datos) => {
                    datos.json().then(
                        (datos: ServerPost[]) => {
                            setSaludo("Los datos se han recogido");
                            setLoading(false);
                            setDatos(PostMapper.toPost(datos))
                        }
                    ),
                    () => {
                    setSaludo("Los datos no están en formato Json");
                    setLoading(false);
                    }
                },
                () => {
                    setSaludo("La url no es válida");
                    setLoading(false)
                }
            )
        })
    }
  
  useEffect(() => {
    const saludo = () => {
        setSaludo("Hola buenos días")
    }
  })

  return (
    <View>
        <Text>{saludo}</Text>
    </View>
  )
}

export default Hola

const styles = StyleSheet.create({})