import { StyleSheet, Text, View } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { VisitedLocationProps } from "../types/types";
import React, { FC } from "react";

const VisitedLocation: FC<VisitedLocationProps> = (props) => {
  const { location, address } = props;

  return (
    <View style={styles.container}>
      <View style={styles.locationIconContainer}>
        <Ionicons name="ios-location" size={18} color="black" />
      </View>

      <View style={styles.locationContainer}>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.address} numberOfLines={1}>
          {address}
        </Text>
      </View>

      <Fontisto name="angle-right" size={15} color="rgb(170,170,170)" />
    </View>
  );
};

export default VisitedLocation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  locationIconContainer: {
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: "rgb(238,238,238)",
    alignItems: "center",
    justifyContent: "center",
  },
  locationContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  location: {
    fontSize: 18,
    fontWeight: "500",
  },
  address: {
    fontSize: 14,
    marginTop: 5,
    color: "gray",
  },
});
