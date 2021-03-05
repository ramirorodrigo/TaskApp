
import * as React from 'react';
import { useState } from "react";
//import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, CommonActions } from '@react-navigation/bottom-tabs'
import VectorIcons from 'react-native-vector-icons/Entypo';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Button
} from 'react-native';
import List from './vista/createTask/lliista.js'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Navega from './vista/createTask';

function HomeScreen(props, TextInput) {
  return(
    <Navega/>
  );
};
function ListaScreen(props, TextInput) {
  const [tasknam, settasknam] = useState ([
    {name: 'task 1', description: 'analisisar'},
    {name: 'task 2', description: 'desarrollar'},
    {name: 'task 3', description: 'complemntar'},
    {name: 'Tarea 4', description: 'realizar'},
    {name: 'tarea 5', description: 'cumplir'},
]);
return (
    <View style={styles.container}>
      <VectorIcons name= "open-book" size={24} color="green"/>
        <Text style={styles.titulo}> LISTA DE TAREAS</Text>
        <Text style={styles.titulo}> name: 'task 1', description: 'analisisar'</Text>
        <Text style={styles.titulo}> name: 'task 2', description: 'desarrollar'</Text>
        <Text style={styles.titulo}> name: 'task 3', description: 'complemntar</Text>
        
    </View>

);
};
const Tab = createBottomTabNavigator()
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(navigation) {
    return(
      <NavigationContainer>
       <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch (route.name) {
              case 'Home': {
                if (focused) {
                  return (
                    <VectorIcons name= "layers" size={24} color="green"/>
                  );
                }
                else {
                  return (
                    <VectorIcons name= "layers" size={24} color="gray"/>
                  );
                }
              }
              case 'Lista': {
                if (focused) {
                  return (
                    <VectorIcons name= "open-book" size={24} color="green"/>
                  );
                }
                else {
                  return (
                    <VectorIcons name= "open-book" size={24} color="gray"/>
                  );
                }
              }
            }
          },
        })}
       >
         <Tab.Screen name="Home" component={HomeScreen}/>
         <Tab.Screen name="Lista" component={ListaScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#025955',
      paddingVertical: 20,
      paddingHorizontal: 30,
  },
  titulo: {
    color: '#fde8cd',
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  txt: {
    borderWidth: 1,
    borderColor: '#fde8cd',
    height: 45,
    width: '100%',
    paddingHorizontal: 10,
  },
  boton: {
    borderWidth: 1,
    borderColor: '#fde8cd',
    height: 45,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  item: {
    marginTop:'34',
    paddingTop:'34',
    backgroundColor: '#433520',
    fontSize: 24,
    marginHorizontal: 15,
  }
});

export default App;
