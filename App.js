import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Mahad', id: '1' },
    { name: 'Khadija', id: '2' },
    { name: 'Arafat', id: '3' },
    { name: 'Hudheifa', id: '4' },
    { name: 'Muhib', id: '5' },
    { name: 'Maimuna Ahmed', id: '6' },
    { name: 'Said Ally', id: '7' },
  ]);

  const pressHandler = (id) => {
    console.log(id);

    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    }
    )
  }

  return (
    <View style={styles.container}>

      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id} 
        data={people} 
        renderItem={({ item }) => ( 
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
          <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'grey',
    fontSize: 24,
    borderRadius: 20,

  },
});