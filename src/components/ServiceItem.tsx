import { StyleSheet, Text, View, Image } from "react-native";
import React, { FC } from "react";
import { ServiceItemProps } from "../types/types";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const ServiceItem: FC<ServiceItemProps> = (props) => {
  const { serviceImage, serviceName } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: serviceImage }} />

      <Text style={styles.serviceName}>{serviceName}</Text>
    </View>
  );
};

export default ServiceItem;

const styles = StyleSheet.create({
  container: {
    width: 75,
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 65,
    borderRadius: 10,
  },
  serviceName: {
    textTransform: "capitalize",
    fontSize: 13,
    marginTop: 13,
  },
});
