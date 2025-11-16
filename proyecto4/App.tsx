import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppProvider } from './context/Context';
import { NavigationContainer } from '@react-navigation/native';
import Alumno from './screens/Alumno';
import Proyecto from './screens/Proyecto';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

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
