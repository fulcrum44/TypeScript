import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Context';

const SettingsScreen = () => {
    const { state, dispatch } = useContext(AppContext);
    
    const  [gridSize, setGridSize] = useState(state.gridSize);
    const  [trailDuration, setTrailDuration] = useState(state.trailDuration);


  return (
    <View style={styles.container}>
        <Text>Board size</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Pressable
            onPress={() => {
                if (gridSize > 0) setGridSize(gridSize-1)
            }}
            style={({pressed}) => [
                {
                backgroundColor: pressed ? 'rgba(0, 63, 141, 1)' : 'rgba(0, 34, 75, 1)',
                },
                styles.wrapperCustom,
            ]}>

            <Text style={styles.text}> - </Text>

            </Pressable>
            <Text style={styles.logBox}>{gridSize}</Text>
            <Pressable
            onPress={() => {
                setGridSize(gridSize+1)
            }}
            style={({pressed}) => [
                {
                backgroundColor: pressed ? 'rgba(0, 63, 141, 1)' : 'rgba(0, 34, 75, 1)',
                },
                styles.wrapperCustom,
            ]}>
            <Text style={styles.text}> + </Text>
            </Pressable>
        </View>
            {/* //////////////////////////////////////////////////////////////// */}
        <Text>Trail duration</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Pressable
            onPress={() => {
                if (trailDuration > 0) setTrailDuration(trailDuration-1)
            }}
            style={({pressed}) => [
                {
                backgroundColor: pressed ? 'rgba(0, 63, 141, 1)' : 'rgba(0, 34, 75, 1)',
                },
                styles.wrapperCustom,
            ]}>

            <Text style={styles.text}> - </Text>

            </Pressable>
            <Text style={styles.logBox}>{trailDuration}</Text>
            <Pressable
            onPress={() => {
                setTrailDuration(trailDuration+1)
            }}
            style={({pressed}) => [
                {
                backgroundColor: pressed ? 'rgba(0, 63, 141, 1)' : 'rgba(0, 34, 75, 1)',
                },
                styles.wrapperCustom,
            ]}>
            <Text style={styles.text}> + </Text>
            </Pressable>
        </View>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center'
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  logBox: {
    padding: 6,
    // margin: 10,
    width: 100,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    fontSize: 24,
  },
});