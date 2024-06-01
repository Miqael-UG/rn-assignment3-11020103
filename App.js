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
import {
  faMagnifyingGlass,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

const renderTask = ({ item }) => (
  <View style={styles.task}>
    <Text style={styles.taskText}>{item}</Text>
  </View>
);

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

const SearchBar = () => (
  <View style={styles.searchBar}>
    <View style={styles.searchInput}>
      <FontAwesomeIcon size={20} icon={faMagnifyingGlass} />
      <TextInput style={styles.input} placeholder="Search" />
    </View>
    <View style={styles.filter}>
      <FontAwesomeIcon size={30} color="#fff" icon={faSliders} />
    </View>
  </View>
);

const CategorySection = () => (
  <View style={styles.categories}>
    <Text style={styles.sectionTitle}>Categories</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <View style={styles.categoryItem} key={index}>
          <Text style={styles.categoryTitle}>{category.name}</Text>
          <Text>{category.tasks}</Text>
          <Image style={styles.categoryImage} source={category.image} />
        </View>
      ))}
    </ScrollView>
  </View>
);

const TaskSection = () => (
  <View style={styles.tasksSection}>
    <Text style={styles.sectionTitle}>Ongoing Task</Text>
    <FlatList
      data={tasks}
      renderItem={renderTask}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar />
      <CategorySection />
      <TaskSection />
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
  searchBar: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF9FB",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
  },
  input: {
    marginLeft: 10,
    fontSize: 18,
  },
  filter: {
    marginLeft: 10,
    backgroundColor: "#F0522F",
    borderRadius: 10,
    padding: 10,
  },
  categories: {
    marginTop: 25,
  },
  sectionTitle: {
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  categoryItem: {
    width: 140,
    backgroundColor: "#F9FBFF",
    borderRadius: 15,
    padding: 15,
    marginRight: 20,
    alignItems: "center",
  },
  categoryTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  categoryImage: {
    width: 80,
    height: 80,
  },
  tasksSection: {
    marginTop: 15,
    flex: 1,
  },
  tasks: {
    marginTop: 5,
  },
  task: {
    backgroundColor: "#F9FBFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderColor: "#D1E8BA",
    borderWidth: 1,
  },
  taskText: {
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default App;
