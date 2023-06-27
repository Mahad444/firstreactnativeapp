import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("MuhibulHaq Said Ali");
  const [age, setAge] = useState("30");

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Enter Name e.g Don Doe"
        onChangeText={(name) => {
          setName(name);
        }} 
      />
      {/* age */}
      <Text>Enter Age:</Text>
      <TextInput
      keyboardType="numeric"
        style={styles.input}
        placeholder="Enter age e.g 12"
        onChangeText={(age) => {
          setAge(age);
        }}
      />
      <Text>
        name:{name} , age:{age}
      </Text>
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
  header: {
    backgroundColor: "#f00",
    padding: 20,
    borderRadius: 9,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "#0f0",
    padding: 20,
    borderRadius: 15,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 15,
    width: 200,
  },
});
