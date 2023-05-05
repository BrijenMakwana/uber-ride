import { StyleSheet, Text, View, Image } from "react-native";
import React, { FC } from "react";
import { ServiceItemProps } from "../types/types";

const ServiceItem: FC<ServiceItemProps> = (props) => {
  const { serviceImage, serviceName, promoIsAvailable } = props;
  return (
    <View style={styles.container}>
      {promoIsAvailable && (
        <View style={styles.promoContainer}>
          <Text style={styles.promoText}>promo</Text>
        </View>
      )}

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
  promoContainer: {
    backgroundColor: "rgb(9,136,77)",
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 9,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -12,
    zIndex: 2,
  },
  promoText: {
    color: "#fff",
    fontSize: 12,
    textTransform: "capitalize",
  },
  image: {
    width: "100%",
    height: 65,
    borderRadius: 10,
    resizeMode: "contain",
  },
  serviceName: {
    textTransform: "capitalize",
    fontSize: 13,
    marginTop: 13,
  },
});
