import * as React from 'react';
//import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, CommonActions } from '@react-navigation/bottom-tabs'
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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//const Tab = createBottomTabNavigator()
class Navega extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      description: null,
      date: "dd/mm/aaaa",
      hour: "02:26",
    };
  }
  render() {
    const { name, description, date, hour } = this.state;
    return(
        <View style={styles.container}>
          <Text style={styles.titulo}>Nombre de Tarea Nueva</Text>
          <TextInput style={styles.txt} value={name} onChangeText={val => this.setState({ name: val })}/>
          <Text style={styles.titulo}>Descripsion de Tarea</Text>
          <TextInput style={styles.txt} value={description} onChangeText={val => this.setState({ description: val })}/>
          <Text style={styles.titulo}>Fecha de creacion</Text>
          <TextInput style={styles.txt} value={date} onChangeText={val => this.setState({ date: val })}/>
          <Text style={styles.titulo}>Hora</Text>
          <TextInput style={styles.txt} value={hour} onChangeText={val => this.setState({ hour: val })}/>
          <TouchableOpacity style={styles.boton} 
          onPress={() => {console.log({name, description, date, hour});
  
          }}>
            <Text style={styles.titulo}>Guardar Tarea</Text>
          </TouchableOpacity>
        </View>
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
      marginTop: 120,
    }
  });
  
  export default Navega;