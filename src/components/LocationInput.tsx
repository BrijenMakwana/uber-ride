import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import UIInput from "./UIComponents/UIInput";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const SwitchRider = () => {
  return (
    <View style={styles.switchRiderContainer}>
      <View style={styles.avatar}>
        <Entypo name="user" size={13} color="gray" />
      </View>

      <Text style={styles.switchRiderText}>Switch rider</Text>

      <Entypo name="chevron-down" size={15} color="black" />
    </View>
  );
};

const LocationInput = () => {
  const navigation = useNavigation();

  const goToPreviousScreen = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <SwitchRider />
      <Pressable style={styles.goBack} onPress={goToPreviousScreen}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </Pressable>

      <View style={styles.locationContainer}>
        <View style={styles.iconsContainer}>
          <Entypo name="dot-single" size={27} color="black" />
          <MaterialCommunityIcons name="square-small" size={30} color="black" />
        </View>

        <View style={styles.inputContainer}>
          <UIInput placeholderText="Where to?" />
          <UIInput placeholderText="Where to?" />
        </View>

        <Pressable style={styles.addStopsBtn}>
          <Entypo name="plus" size={27} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default LocationInput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    paddingBottom: 5,
  },
  goBack: {
    width: 40,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconsContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  addStopsBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(238,238,238)",
    borderRadius: 50,
    padding: 3,
  },
  switchRiderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 125,
    position: "absolute",
    left: 130,
    top: 5,
  },
  avatar: {
    backgroundColor: "rgb(238,238,238)",
    padding: 5,
    borderRadius: 30,
  },
  switchRiderText: {
    flex: 1,
    fontSize: 13,
    fontWeight: "300",
    marginLeft: 7,
  },
});
