import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MenuBoxProps } from "../types/types";

const MenuBox: FC<MenuBoxProps> = (props) => {
  const { iconName, menuName } = props;
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={28} color="black" />
      <Text style={styles.menuName}>{menuName}</Text>
    </View>
  );
};

export default MenuBox;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 110,
    height: 90,
    backgroundColor: "rgb(238,238,238)",
    borderRadius: 10,
  },
  menuName: {
    fontSize: 15,
    fontWeight: "400",
    textTransform: "capitalize",
    marginTop: 10,
  },
});
