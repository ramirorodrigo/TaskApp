
import * as React from 'react';
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
function ListaScreen() {
  return (
    <View>
      <Text>Home Screen
      <VectorIcons name= "dribbble" size={24} color="black"/>
      </Text>
    </View>
  );
}
const Tab = createBottomTabNavigator()
class App extends React.Component {
  
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
                    <VectorIcons name= "dribbble" size={24} color="black"/>
                  );
                }
                else {
                  return (
                    <VectorIcons name= "dribbble" size={24} color="red"/>
                  );
                }
              }
              case 'Lista': {
                if (focused) {
                  return (
                    <VectorIcons name= "dribbble" size={24} color="black"/>
                  );
                }
                else {
                  return (
                    <VectorIcons name= "dribbble" size={24} color="red"/>
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
  }
});

export default App;
