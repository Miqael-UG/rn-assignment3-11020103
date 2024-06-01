import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { categories, tasks } from "./data/data";

const Header = () => (
  <View style={styles.header}>
    <View>
      <Text style={styles.greeting}>Hello, Devs</Text>
      <Text style={styles.taskInfo}>{tasks.length} tasks today</Text>
    </View>
    <View style={styles.userIcon}>
      <Image source={require("./assets/person.png")} />
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F7F0",
    padding: 20,
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userIcon: {
    backgroundColor: "#FFF9FB",
    borderRadius: 50,
    padding: 2,
  },
  greeting: {
    fontSize: 32,
    fontWeight: "bold",
  },
  taskInfo: {
    fontSize: 14,
    color: "#666",
  },
});

export default App;
