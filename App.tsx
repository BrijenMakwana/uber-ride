import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import SearchLocation from "./src/components/SearchLocation";
import VisitedLocation from "./src/components/VisitedLocation";
import { visitedLocations } from "./assets/data/data";
import ServiceSuggestions from "./src/components/ServiceSuggestions";
import UberAuto from "./src/components/UberAuto";
import ServiceBanners from "./src/components/ServiceBanners";

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
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <SearchLocation />

        <View>
          {visitedLocations.map((item) => (
            <VisitedLocation {...item} key={item.id} />
          ))}
        </View>

        <ServiceSuggestions />

        <UberAuto />

        <ServiceBanners />
        <StatusBar style="auto" />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
});
