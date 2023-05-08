import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React, { FC } from "react";
import { CarOptionProps } from "../types/types";
import UIButton from "./UIComponents/UIButton";
import UIInput from "./UIComponents/UIInput";

const CarOption: FC<CarOptionProps> = (props) => {
  const {
    carImage,
    carType,
    arrivingTime,
    minAway,
    fair,
    selectedCar,
    setSelectedCar,
  } = props;

  const bgColor = selectedCar === carType ? "rgb(238,238,238)" : "#fff";

  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
        },
      ]}
      onPress={() => setSelectedCar(carType)}
    >
      <Image
        source={{
          uri: carImage,
        }}
        style={styles.carImage}
      />

      <View style={styles.carInfoContainer}>
        <Text style={styles.carName}>{carType}</Text>
        <View style={styles.arrivingInfoContainer}>
          <Text style={styles.arrivingTime}>{arrivingTime}</Text>
          <Entypo name="dot-single" size={15} color="#484848" />
          <Text style={styles.minAway}>{minAway} min away</Text>
        </View>
      </View>

      <Text style={styles.fair}>₹{fair}</Text>
    </Pressable>
  );
};

export default CarOption;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "rgb(238,238,238)",
  },
  carImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  carInfoContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  carName: {
    fontSize: 18,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  arrivingInfoContainer: {
    flexDirection: "row",
    marginTop: 3,
    alignItems: "center",
  },
  arrivingTime: {
    fontSize: 12,
    fontWeight: "200",
    color: "#484848",
  },
  minAway: {
    fontSize: 12,
    fontWeight: "200",
    color: "#484848",
  },
  fair: {
    fontSize: 15,
    fontWeight: "500",
  },
});
