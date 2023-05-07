import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Feather, AntDesign, Entypo } from "@expo/vector-icons";
import React, { FC } from "react";
import { SearchLocationProps, ScreenType } from "../types/types";
import { useNavigation, NavigationProp } from "@react-navigation/native";

const SearchLocation: FC<SearchLocationProps> = (props) => {
  const { openPickupTimeModal } = props;
  const navigation = useNavigation<NavigationProp<ScreenType>>();

  const goToFindRideScreen = () => {
    navigation.navigate("FindRide");
  };

  return (
    <View style={styles.container}>
      <Feather name="search" size={25} color="black" />

      <Pressable
        style={styles.locationTextContainer}
        onPress={goToFindRideScreen}
      >
        <Text style={styles.locationText}>Where to?</Text>
      </Pressable>

      <Pressable
        style={styles.pickupTimeContainer}
        onPress={openPickupTimeModal}
      >
        <AntDesign name="clockcircle" size={20} color="black" />

        <Text style={styles.pickupTime}>now</Text>

        <Entypo name="chevron-down" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default SearchLocation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgb(238,238,238)",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 30,
  },
  locationTextContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  locationText: {
    fontSize: 20,
  },
  pickupTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 120,
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  pickupTime: {
    fontSize: 14,
    textTransform: "capitalize",
  },
});
