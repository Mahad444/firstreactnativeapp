import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Header</Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.body}>
        <Text style={styles.boldText}>MuhibulHaq Said Ally  </Text>
        <Text style={styles.boldText}>lorem ipsum emit aves cartex is </Text>
        <Text style={styles.boldText}>lorem ipsum emit aves cartex is </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0",
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
  }
});
