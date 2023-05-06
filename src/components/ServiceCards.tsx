import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { ServiceCardsProps } from "../types/types";
import ServiceCard from "./ServiceCard";

const ServiceCards: FC<ServiceCardsProps> = (props) => {
  const { heading, serviceCards } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>

      <View style={styles.serviceCardsContainer}>
        <FlatList
          data={serviceCards}
          renderItem={({ item }) => <ServiceCard {...item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="start"
          decelerationRate={"fast"}
          snapToInterval={230}
        />
      </View>
    </View>
  );
};

export default ServiceCards;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  serviceCardsContainer: {
    marginTop: 15,
  },
});
