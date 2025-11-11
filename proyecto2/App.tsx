import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContext, AppProvider } from './context/Context';
import { StatusBar } from 'expo-status-bar';
import Alumno from './screens/Alumno';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Proyecto from './screens/Proyecto';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Alumno" component={Alumno} />
          <Tab.Screen name="Proyecto" component={Proyecto} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


