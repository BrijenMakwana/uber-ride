import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { FC } from "react";
import { ServiceCardProps } from "../types/types";

const ServiceCard: FC<ServiceCardProps> = (props) => {
  const { serviceImage, title, description } = props;
  return (
    <Pressable style={styles.container}>
      <Image
        source={{
          uri: serviceImage,
        }}
        style={styles.cardImage}
      />

      <View style={styles.informationContainer}>
        <Text style={styles.title}>{title}</Text>
        <AntDesign name="arrowright" size={15} color="black" />
      </View>
      <Text style={styles.description}>{description}</Text>
    </Pressable>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
  cardImage: {
    width: 230,
    aspectRatio: 16 / 9,
    borderRadius: 10,
    resizeMode: "contain",
  },
  informationContainer: {
    flexDirection: "row",
    marginTop: 17,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    marginRight: 3,
  },
  description: {
    marginTop: 5,
    fontSize: 15,
    color: "gray",
  },
});
