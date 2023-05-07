import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const UICurrentLocation = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="my-location" size={25} color="black" />
    </View>
  );
};

export default UICurrentLocation;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 30,
    bottom: 90,
    right: 17,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    elevation: 10,
  },
});
