import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { MenuWithIconProps } from "../types/types";
import { FontAwesome } from "@expo/vector-icons";

const MenuWithIcon: FC<MenuWithIconProps> = (props) => {
  const { iconName, menuName } = props;
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome name={iconName} size={15} color="black" />
      </View>

      <Text style={styles.menuName}>{menuName}</Text>
    </View>
  );
};

export default MenuWithIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginVertical: 16,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
  },
  menuName: {
    fontSize: 15,
    fontWeight: "400",
    textTransform: "capitalize",
    flex: 1,
    marginLeft: 15,
  },
});
