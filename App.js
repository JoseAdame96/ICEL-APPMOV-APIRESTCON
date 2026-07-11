// ADAME CRUZ JOSE MARIA
// 000087493
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// IMPORTACIONES NECESARIAS
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ItemScreen from './screens/ItemsScreen';
import DetailScreen from './screens/DetailScreen';
import AddItemScreen from './screens/AddItemScreen';

// DECLARACION DE CONSTANTES
const Stack = createNativeStackNavigator();
const initialItems = [
  {
    id:'1',
    title:'Tarea 1',
    description:'Crear app usando npx'
  },
  {
    id:'2',
    title:'Tarea 2',
    description:'Correr app usando npx expo start'
  }
]
export default function App() {
  const[items, setItems] = useState(initialItems);

  function addItem(newItem) {
    setItems([...items], {
      id: Date.now.toString,
      title: newItem.title,
      description: newItem.description
    })
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*Menu de navegacion*/}

        <Stack.Screen name='Home'
        component={HomeScreen}
        options={{title:'Home'}}/>


        <Stack.Screen name='Items'
        options={{title:'Listado'}}
        component={ItemScreen}/>


        <Stack.Screen name='Detail'
        component={DetailScreen}/>

        <Stack.Screen name='AddItem'
        options={{title:'Nuevo Elemento'}}>
          { (props) => <AddItemScreen {...props} onAddItem={addItem}></AddItemScreen>}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
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
