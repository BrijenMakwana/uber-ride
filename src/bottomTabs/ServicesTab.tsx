import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import UITabHeading from "../components/UIComponents/UITabHeading";
import { Services } from "../components/ServiceSuggestions";

const ServicesTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UITabHeading text="services" />

      <View style={styles.servicesContainer}>
        <Text style={styles.heading}>Go anywhere, get anything</Text>

        <Services />
      </View>
    </SafeAreaView>
  );
};

export default ServicesTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  servicesContainer: {
    paddingHorizontal: 15,
    marginTop: 30,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    textTransform: "capitalize",
  },
});
