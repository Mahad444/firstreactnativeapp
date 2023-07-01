import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("MuhibulHaqqu Said Ali");
  const [age, setAge] = useState("12");

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
      keyboardType="default"
        multiline
        style={styles.input}
        placeholder="Weka jina  mfano  Don Doe"
        onChangeText={(name) => {
          setName(name);
        }} 
      />
      {/* age */}
      <Text>Enter Age:</Text>
      <TextInput
      keyboardType="numeric"
        style={styles.input}
        placeholder="Weka Umri m.f 12"
        onChangeText={(age) => {
          setAge(age);
        }}
      />
      <Text>
        Jina:{name} , miaka:{age}
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
