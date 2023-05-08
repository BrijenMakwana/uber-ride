import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome5, Foundation } from "@expo/vector-icons";
import React, { useState } from "react";

const SelectPayment = () => {
  const [selectedAccountType, setSelectedAccountType] =
    useState<string>("personal");

  const toggleAccountType = () => {
    setSelectedAccountType((prev) =>
      prev === "personal" ? "business" : "personal"
    );
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.iconsContainer} onPress={toggleAccountType}>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor:
                selectedAccountType === "personal"
                  ? "#000"
                  : "rgb(238,238,238)",
            },
          ]}
        >
          <FontAwesome5
            name="user-alt"
            size={selectedAccountType === "personal" ? 16 : 10}
            color={selectedAccountType === "personal" ? "#fff" : "#000"}
          />
        </View>

        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor:
                selectedAccountType === "business"
                  ? "#3C79F5"
                  : "rgb(238,238,238)",
            },
          ]}
        >
          <Foundation
            name="shopping-bag"
            size={selectedAccountType === "business" ? 16 : 13}
            color={selectedAccountType === "business" ? "#fff" : "#000"}
          />
        </View>
      </Pressable>

      <View style={styles.infoContainer}>
        <Text style={styles.accountType}>{selectedAccountType}</Text>
        <Text style={styles.paymentMethod}>Select Payment</Text>
      </View>
    </View>
  );
};

export default SelectPayment;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 5,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "rgb(238,238,238)",
    height: 40,
  },
  iconContainer: {
    backgroundColor: "rgb(238,238,238)",
    padding: 11,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 15,
  },
  accountType: {
    fontSize: 13,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  paymentMethod: {
    fontSize: 13,
    color: "#3C79F5",
    marginTop: 2,
    textTransform: "capitalize",
  },
});
