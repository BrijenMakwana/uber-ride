import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";
import ServiceItem from "./ServiceItem";
import { services } from "../../assets/data/data";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { BottomTabType } from "../types/types";

export const Services = () => {
  return (
    <View style={styles.services}>
      {services.map((item) => (
        <ServiceItem {...item} key={item.id} />
      ))}
    </View>
  );
};

const ServiceSuggestions = () => {
  const navigation = useNavigation<NavigationProp<BottomTabType>>();

  const goToServicesTab = () => {
    navigation.navigate("ServicesTab");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Suggestions</Text>
        <Pressable onPress={goToServicesTab}>
          <Text style={styles.seeAll}>see all</Text>
        </Pressable>
      </View>

      <Services />
    </View>
  );
};

export default ServiceSuggestions;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  seeAll: {
    fontSize: 14,
    textTransform: "capitalize",
    marginRight: 10,
  },
  services: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    flexWrap: "wrap",
  },
});
