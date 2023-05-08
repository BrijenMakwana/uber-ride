import { StyleSheet, Text, View } from "react-native";
import { Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import CarOption from "./CarOption";
import { cars } from "../../assets/data/data";
import UIButton from "./UIComponents/UIButton";
import SelectPayment from "./SelectPayment";

const SelectCar = () => {
  const [selectedCar, setSelectedCar] = useState<string>("sedan intercity");

  const bookBtnText = `confirm ${selectedCar}`;

  return (
    <View style={styles.coontainer}>
      <Octicons name="horizontal-rule" size={50} color="rgb(200,200,200)" />
      <Text style={styles.instruction}>Choose a ride, or swipe up for</Text>

      {cars.map((car) => (
        <CarOption
          {...car}
          key={car.id}
          selectedCar={selectedCar}
          setSelectedCar={setSelectedCar}
        />
      ))}

      <SelectPayment />

      <View style={styles.bookCarBtnContainer}>
        <UIButton text={bookBtnText} onPress={() => undefined} />
      </View>
    </View>
  );
};

export default SelectCar;

const styles = StyleSheet.create({
  coontainer: {
    backgroundColor: "#fff",
    position: "absolute",
    width: "100%",
    bottom: 0,
    zIndex: 2,
    alignItems: "center",
  },
  instruction: {
    fontSize: 14,
    fontWeight: "200",
    marginTop: -15,
    marginBottom: 10,
  },
  bookCarBtnContainer: {
    width: "100%",
    marginVertical: 15,
  },
});
