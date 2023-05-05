import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const UberAuto = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Ways to save with Uber</Text>

      <Pressable style={styles.uberAutoContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1519687335474-c85fb3a50ca3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          }}
          style={styles.rickshawImage}
        />

        <View style={styles.autoRide}>
          <Text style={styles.autoRideText}>Auto rides</Text>
          <AntDesign name="arrowright" size={15} color="black" />
        </View>
        <Text style={styles.tagline}>Upfront fares, doorstep pickups</Text>
      </Pressable>
    </View>
  );
};

export default UberAuto;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  uberAutoContainer: {
    marginTop: 15,
  },
  rickshawImage: {
    width: "65%",
    aspectRatio: 16 / 9,
    borderRadius: 10,
    resizeMode: "contain",
  },
  autoRide: {
    flexDirection: "row",
    marginTop: 17,
    alignItems: "center",
  },
  autoRideText: {
    fontSize: 16,
    fontWeight: "400",
    marginRight: 3,
  },
  tagline: {
    marginTop: 5,
    fontSize: 15,
    color: "gray",
  },
});
