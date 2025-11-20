import { Dimensions, FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../context/Context'
import { Cell } from '../context/entities/Cell';

interface GridCell {
  cell: Cell,
  
}

const numColumns = 3;
const size = Dimensions.get('window').width/numColumns;

const GameScreen = () => {
  const { state, dispatch } = useContext(AppContext)

  const cellStyle = (cell: Cell) => {
      const trail = state.trail.findIndex((t) => t.x === cell.x && t.y === cell.y);


  }

  let grid : GridCell[] = Array.from( {length: state.gridSize * state.gridSize}, (_, i) => {
    return {
      cell: {x: i % state.gridSize, y: Math.floor(i / state.gridSize)}
    }
  })

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal={true} 
        contentContainerStyle={styles.scrollView}
      >
        <View>
          <FlatList
            data={grid}
            renderItem={({item}) => (
              <Pressable style={[styles.cell, { width: 50, height: 50 }]} onPress={() => {}}>
                {/* <Text style={{fontSize:24}}> |{item.cell.x}, {item.cell.y}| </Text> */}
              </Pressable>
            )}
            keyExtractor={item => ((item.cell.x * 7) * item.cell.y).toString()}
            numColumns={state.gridSize} />
        </View>
      </ScrollView>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    itemContainer: {
      width:  size,
      height:  size,
    },
    container: {
        backgroundColor: '#e1f5fe',
        alignItems: 'center',
        paddingTop: 50,
    },
    scrollView: {
        justifyContent: 'center', // Centra el tablero si es más pequeño que la pantalla
        paddingHorizontal: 20
    },
    cell: {
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        // margin: 5,
        backgroundColor: '#004261ff'
    },
  });