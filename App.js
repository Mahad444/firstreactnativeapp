import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Button } from "react-native";
import React, { useState } from "react";


export default function App() {

  const [name, setName] = useState("MuhibulHaq Said Ally"); 
  const [person, setPerson] = useState({name: "MuhibulHaq", age: 40});


   const clickHandler = () => {
      setName("MuhibulHaq Said");
      setPerson({name: "Muhibul", age: 46});
    }
   
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Header</Text>
        {/* <Text style={styles.boldText}>My name is {name}</Text> */}
      </View>
      <StatusBar style="auto" />
      <View style={styles.body}>
        <Text style={styles.boldText}>his name is{person.name} and his age is {person.age}</Text> 
        <Text style={styles.boldText}>My name is {name}</Text>
        <Text style={styles.boldText}>lorem ipsum emit aves cartex is </Text>
        <Text style={styles.boldText}>lorem ipsum emit aves cartex is </Text>
      </View>
      <View style={styles.buttonContainer}>
      <Button title="update state" onPress= {clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
  },
  header :{
    backgroundColor: "#f00",
    padding: 20,
    borderRadius: 9,
  },
  boldText: {
    fontWeight: "bold"
  },
  body: {
    backgroundColor: "#0f0",
    padding: 20,
    borderRadius:15
  },
  buttonContainer:{
    marginTop:20,
  }
});
