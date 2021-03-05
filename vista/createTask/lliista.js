import { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    StatusBar,
    TouchableOpacity,
    Button,
    FlatList
  } from 'react-native';

export default function List() {
    const [tasknam, settasknam] = useState ([
        {name: 'task 1', description: 'analisisar'},
        {name: 'task 2', description: 'desarrollar'},
        {name: 'task 3', description: 'complemntar'},
        {name: 'Tarea 4', description: 'realizar'},
        {name: 'tarea 5', description: 'cumplir'},
    ]);
    return (
        <View>
            <FlatList
                data={tasknam}
                renderItem={({ item }) => (
                    <Text>{item.name}</Text>
                )}
            />
        </View>

    );
}