import { Dimensions, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
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
    <FlatList
      data={grid}
      renderItem={({item}) => (
        <Pressable onPress={() => {}}>
          <Text style={{fontSize:24}}> |{item.cell.x}, {item.cell.y}| </Text>
        </Pressable>
      )}
      keyExtractor={item => ((item.cell.x * 7) * item.cell.y).toString()}
      numColumns={state.gridSize} />
  )
}

export default GameScreen

const styles = StyleSheet.create({
    itemContainer: {
      width:  size,
      height:  size,
    },
    item: {
      flex: 1,
      margin: 3,
      backgroundColor: 'lightblue',
    }
  });