import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LocationInput from "../components/LocationInput";

const FindRideScreen = () => {
  return (
    <View style={styles.container}>
      <LocationInput />
    </View>
  );
};

export default FindRideScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
