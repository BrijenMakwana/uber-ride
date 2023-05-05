import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View, FlatList } from "react-native";
import SearchLocation from "./src/components/SearchLocation";
import VisitedLocation from "./src/components/VisitedLocation";
import { visitedLocations } from "./assets/data/data";

const Devider = () => {
  return (
    <View
      style={{
        height: 1.5,
        backgroundColor: "rgb(238,238,238)",
        width: "82%",
        alignSelf: "flex-end",
      }}
    />
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchLocation />

      <FlatList
        data={visitedLocations}
        renderItem={({ item }) => <VisitedLocation {...item} />}
        keyExtractor={(visitedLocation) => visitedLocation.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Devider />}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
});
