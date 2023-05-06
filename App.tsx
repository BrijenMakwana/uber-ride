import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import SearchLocation from "./src/components/SearchLocation";
import VisitedLocation from "./src/components/VisitedLocation";
import {
  visitedLocations,
  serviceCards1,
  serviceCards2,
} from "./assets/data/data";
import ServiceSuggestions from "./src/components/ServiceSuggestions";
import ServiceBanners from "./src/components/ServiceBanners";
import ServiceCards from "./src/components/ServiceCards";
import PickupTimeModal from "./src/components/PickupTimeModal";
import { Fragment, useState } from "react";

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
  const [pickupTimeModalIsOpen, setPickupTimeModalIsOpen] =
    useState<boolean>(false);

  const openPickupTimeModal = () => {
    setPickupTimeModalIsOpen(true);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <SearchLocation openPickupTimeModal={openPickupTimeModal} />

        <View>
          {visitedLocations.map((item, index) => {
            return (
              <Fragment key={item.id}>
                <VisitedLocation {...item} key={item.id} />
                {index < visitedLocations.length - 1 && <Devider />}
              </Fragment>
            );
          })}
        </View>

        <ServiceSuggestions />

        <ServiceCards {...serviceCards1} />

        <ServiceBanners />

        <ServiceCards {...serviceCards2} />

        <PickupTimeModal
          pickupTimeModalIsOpen={pickupTimeModalIsOpen}
          setPickupTimeModalIsOpen={setPickupTimeModalIsOpen}
        />

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
