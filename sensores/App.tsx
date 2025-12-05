import { useState, useEffect } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { StatusBar } from 'expo-status-bar';
import { Vibration } from 'react-native';
import { LightSensor } from 'expo-sensors';


export default function App() {
  const [{ x, y, z }, setData] = useState({x: 0, y: 0, z: 0});
  const [{ illuminance }, setLight] = useState({ illuminance: 0 });

  

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];
  

  useEffect(() => {
    const subscription = Accelerometer.addListener(setData);
    return () => subscription.remove();
  }, []);

  useEffect(() => {
    const brightness = LightSensor.addListener(setLight)
    return () => brightness.remove()
  }, []);

  return (
    <View style={styles.container}>
    <Text>x: {x.toFixed(2)}</Text>
    <Text>y: {y.toFixed(2)}</Text>
    <Text>z: {z.toFixed(2)}</Text>
    <Text> Illuminance: {Platform.OS === 'android' ? `${illuminance} lx` : `Only available on Android`}</Text>
    <StatusBar style="auto"/>

  
    <Text>Vibration example</Text>
    <Button title='vibrate' onPress={() => Vibration.vibrate(50000)}/>

    <Button title='No vibrate' onPress={() => Vibration.cancel}/>

    <Button title='Vibrate 10 seconds' onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}/>

    <Text>Wait 1s, vibrate, wait 2s, vibrate, wait 3s</Text>

    <Button title="Vibrate with pattern until cancelled" onPress={() => Vibration.vibrate(PATTERN, true)}/>

    <Button title="Stop vibration pattern" onPress={() => Vibration.cancel()} color="#FF0000"/>
    <StatusBar style="auto"/>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
